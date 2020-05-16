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
    const randomSol = Math.floor(Math.random() * 1000);

    const res = useFetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN`,
        {}
    );

    console.log("Photos fetched! --->>>", res.response);

    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [photosToDisplay, setPhotosToDisplay] = useState();

    useEffect(
        (res) => {
            if (res) {
                setPhotosToDisplay((res) => {
                    res.response.photos
                        .filter((item) => item.camera.name.includes("NAVCAM"))
                        .map((photo) => {
                            return {
                                id: photo.id,
                                img_src: photo.img_src,
                                earth_date: photo.earth_date,
                                name: photo.rover.name,
                                status: photo.rover.status,
                                launch_date: photo.rover.launch_date,
                                landing_date: photo.rover.landing_date,
                            };
                        });
                });
            }
        },
        [res.response]
    );

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

    // const photos = res.response.photos.filter((item) =>
    //     item.camera.name.includes("NAVCAM")
    // );

    // Render Photo component
    function renderPhotoPage(pageIndex) {
        return <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />;
    }

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    console.log("Display ->", photosToDisplay);
    return (
        <>
            {photosToDisplay ? (
                <div className="md:text-right">
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
