import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/Pagination";
import Photos from "./Photos";
import Button from "../base/Button";

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

    console.log("Photos to display ->", photosToDisplay);

    function renderPhotoPage(pageIndex) {
        return <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />;
    }

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
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
