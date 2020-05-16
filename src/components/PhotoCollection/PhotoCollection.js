import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Pagination from "../base/Pagination";
import chunkArray from "../../utils/chunkArray";
import Photos from "./Photos";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function PhotosPage() {
    const res = useFetch(
        "https://images-api.nasa.gov/search?q=launch&media_type=image",
        {}
    );

    console.log("Photos fetched! --->>>", res.response);

    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [photosToDisplay, setPhotosToDisplay] = useState();

    useEffect(() => {
        if (res.response) {
            setPhotosToDisplay(
                chunkArray(res.response.collection.items, PHOTOS_PER_PAGE)
            );
        }
    }, [res.response]);

    function renderPhotoPage(pageIndex) {
        return <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />;
    }

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {photosToDisplay ? (
                <div className="md:text-center">
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
export default PhotosPage;
