import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/Pagination";
import Photos from "./Photos";
import TransitionInview from "../TransitionInview";
import Select from "./roverSelect";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function RoverPhotos() {
    const randomSol = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    console.log("Sol", randomSol(1, 2764));

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

    console.log("photoData", photoData);

    return (
        <>
            {photoData ? (
                <TransitionInview>
                    <div className="grid grid-cols-4 gap-4 bg-secondary px-12 py-10 rounded-md mb-6 mt-12 text-center">
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Rover name:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].rover.name}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Earth Date:{" "}
                            </span>
                            <span className="block">
                                <Moment format="DD/MM/YYYY">
                                    {res.response.photos[0].earth_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Launch Date:{" "}
                            </span>
                            <span className="block">
                                <Moment format="DD/MM/YY">
                                    {res.response.photos[0].rover.launch_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-xs text-gray-700">
                                Status:{" "}
                            </span>
                            <span className="block">
                                {res.response.photos[0].rover.status}
                            </span>
                        </div>
                    </div>
                </TransitionInview>
            ) : (
                <div className="container mx-auto pt-12 pb-32">
                    <Loader className="mx-auto" />
                </div>
            )}

            <TransitionInview>
                <div className="container mx-auto  md:flex mt-32 mb-24 border-b-2 border-black text-left">
                    <h2 className="md:w-4/12 line-block flex-1 mb-8 mx-auto">
                        Mars rovers
                    </h2>

                    <p className="md:w-7/12 mb-12 mx-auto">
                        Spirit and Opportunity landed on Mars January 3 and
                        January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both
                        rovers lived well beyond their planned 90-day missions.
                        Spirit and Opportunity found evidence for past wet
                        conditions that possibly could have supported microbial
                        life.
                    </p>
                </div>
            </TransitionInview>

            <Select />

            {photosToDisplay ? (
                <div className="container">
                    <Pagination
                        numberOfPages={photosToDisplay.length}
                        onPageChange={changePage}
                        activePageNumber={currentPage}
                    />

                    {renderPhotoPage(currentPage - 1)}
                </div>
            ) : (
                <div className="container mx-auto h-screen text-center">
                    <Loader className="inline-block" />
                </div>
            )}
        </>
    );
}
export default RoverPhotos;
