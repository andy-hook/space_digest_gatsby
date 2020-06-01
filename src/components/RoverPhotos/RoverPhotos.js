import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/pagination";
import Photos from "./photos";
import RoverSelect from "./roverSelect";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function RoverPhotos() {
    const randomSol = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const res = useFetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol(
            1,
            2764
        )}&camera=navcam&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN`,
        {}
    );

    console.log("Photos fetched! --->>>", res.response);

    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [photosToDisplay, setPhotosToDisplay] = useState();

    useEffect(() => {
        if (res.response) {
            setPhotosToDisplay(
                chunkArray(
                    res.response.photos.filter((item) =>
                        item.camera.name.includes("NAVCAM")
                    ),
                    PHOTOS_PER_PAGE
                )
            );
        }
    }, [res.response]);

    function renderPhotoPage(pageIndex) {
        return <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />;
    }

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    const photoData = JSON.parse(JSON.stringify(res.response));

    // console.log("photoData", photoData);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            {photosToDisplay ? (
                <div>
                    <div className="md:flex justify-between items-end">
                        <div className="flex-grow z-50">
                            <RoverSelect />
                        </div>
                        <div className="flex-grow flex justify-end">
                            <Pagination
                                numberOfPages={photosToDisplay.length}
                                onPageChange={changePage}
                                activePageNumber={currentPage}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-secondary px-12 py-10 rounded-md mb-6 mt-12 text-center z-0">
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Rover name:{" "}
                            </span>
                            <span className="block text-xl">
                                {res.response.photos[0].rover.name}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block text-xl">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Earth Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YYYY">
                                    {res.response.photos[0].earth_date}
                                </Moment>
                            </span>
                        </div>

                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Launch Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YY">
                                    {res.response.photos[0].rover.launch_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Landing Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YY">
                                    {res.response.photos[0].rover.landing_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Status:{" "}
                            </span>
                            <span className="block text-xl">
                                {capitalizeFirstLetter(
                                    res.response.photos[0].rover.status
                                )}
                            </span>
                        </div>
                    </div>

                    {renderPhotoPage(currentPage - 1)}
                </div>
            ) : (
                <div className="container mx-auto h-screen text-center">
                    <Loader className="inline-block text-xl" />
                </div>
            )}
        </>
    );
}
export default RoverPhotos;
