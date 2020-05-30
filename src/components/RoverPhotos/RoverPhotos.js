import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/pagination";
import Photos from "./photos";
import TransitionInview from "../transitionInview";
import RoverSelect from "./roverSelect";

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

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <TransitionInview>
                <div className="md:container mx-auto md:flex mt-16 md:mt-32 mb-12 md:mb-24 border-b-2 border-black text-left">
                    <h3 className="md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-3xl">
                        Mars rovers
                    </h3>

                    <p className="md:w-7/12 mb-20 mx-auto">
                        Spirit and Opportunity landed on Mars January 3 and
                        January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both
                        rovers lived well beyond their planned 90-day missions.
                        Spirit and Opportunity found evidence for past wet
                        conditions that possibly could have supported microbial
                        life.
                    </p>
                </div>
            </TransitionInview>

            <div className="px-8 md:w-7/12 mx-auto text-center mb-16 md:mb-20">
                <h2 className="mb-6 font-bold">Mars Rover Images</h2>
                <p className="mb-10">
                    Select your favourite Mars Rover and cameras to display
                    images from Mars
                </p>
            </div>

            {photosToDisplay ? (
                <>
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
                    {photoData ? (
                        <TransitionInview>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-secondary px-12 py-10 rounded-md mb-6 mt-12 text-center z-0">
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
                                        Launch Date:{" "}
                                    </span>
                                    <span className="block">
                                        <Moment format="DD/MM/YY">
                                            {
                                                res.response.photos[0].rover
                                                    .launch_date
                                            }
                                        </Moment>
                                    </span>
                                </div>
                                <div>
                                    <span className="block uppercase text-xs text-gray-700">
                                        Landing Date:{" "}
                                    </span>
                                    <span className="block">
                                        <Moment format="DD/MM/YY">
                                            {
                                                res.response.photos[0].rover
                                                    .landing_date
                                            }
                                        </Moment>
                                    </span>
                                </div>
                                <div>
                                    <span className="block uppercase text-xs text-gray-700">
                                        Status:{" "}
                                    </span>
                                    <span className="block">
                                        {capitalizeFirstLetter(
                                            res.response.photos[0].rover.status
                                        )}
                                    </span>
                                </div>
                            </div>
                        </TransitionInview>
                    ) : (
                        <div className="container mx-auto pt-12 pb-32">
                            <Loader className="mx-auto" />
                        </div>
                    )}

                    {renderPhotoPage(currentPage - 1)}
                </>
            ) : (
                <div className="container mx-auto h-screen text-center">
                    <Loader className="inline-block" />
                </div>
            )}
        </>
    );
}
export default RoverPhotos;
