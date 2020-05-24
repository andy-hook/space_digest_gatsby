import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Pagination from "../base/Pagination";
import Patches from "./Patches";
import chunkArray from "../../utils/chunkArray";

const START_ON_PAGE_NUMBER = 1;
const PATCHES_PER_PAGE = 16;

function SpacexPatches() {
    const res = useFetch("https://api.spacexdata.com/v3/launches", []);

    console.log("Launches fetched! --->>>", res.response);

    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [patchesToDisplay, setPatchesToDisplay] = useState();

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        if (res.response) {
            setPatchesToDisplay(chunkArray(res.response, PATCHES_PER_PAGE));
        }
    }, [res.response, currentPage]);

    function renderPatchPage(pageIndex) {
        return <Patches items={patchesToDisplay[pageIndex]} key={pageIndex} />;
    }

    return (
        <>
            {patchesToDisplay ? (
                <div className="container mb-16 md:mb0">
                    <div className="container md:flex justify-between items-end mb-8 md:mb-12">
                        <h2 className=" inline-block w-full">
                            Mission Patches
                        </h2>

                        <Pagination
                            numberOfPages={patchesToDisplay.length}
                            onPageChange={changePage}
                            activePageNumber={currentPage}
                        />
                    </div>

                    {renderPatchPage(currentPage - 1)}
                </div>
            ) : (
                <div className="container mx-auto pt-12 pb-32">
                    <Loader className="mx-auto" />
                </div>
            )}
        </>
    );
}

export default SpacexPatches;
