import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/Pagination";
import Photos from "./Photos";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function RoverPhotos() {
    const randomSol = Math.floor(Math.random() * 2764);

    const res = useFetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&camera=navcam&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN`,
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

    console.log("photoData", photoData.photos[0]);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 bg-secondary px-6 py-6 rounded-md mb-6 mt-12">
                <h4>Rover name: {photoData.photos[0].rover.name}</h4>
                <h4>Mars Sol: {photoData.photos[0].sol}</h4>
                <h4>
                    Earth Date:
                    <Moment format="DD/MM/YYYY">
                        {photoData.photos[0].earth_date}
                    </Moment>
                </h4>

                <h4>
                    Launch Date:
                    <Moment format="DD/MM/YY">
                        {photoData.photos[0].rover.launch_date}
                    </Moment>
                </h4>

                <h4>
                    Landing Date:
                    <Moment format="DD/MM/YY">
                        {photoData.photos[0].rover.landing_date}
                    </Moment>
                </h4>
                <h4>Status: {photoData.photos[0].rover.status}</h4>
            </div>

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
