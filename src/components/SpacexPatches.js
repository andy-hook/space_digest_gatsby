import React, { useState, useContext } from "react";
import { SpacexLaunchesContext } from "../context/SpacexLaunchesContext";
import Loader from "./base/Loader";
import Card from "./base/Card";
import spacex from "../img/spacex.png";
import Pagination from "./base/Pagination";

function SpacexPatches() {
    const res = useContext(SpacexLaunchesContext);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(16);

    console.log("Launches fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="mx-auto pt-12 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }

    // Pagination - Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let responsePage = res.response.slice(indexOfFirstPost, indexOfLastPost);
    // Pagination - Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="md:flex justify-between items-end mb-8 md:mb-12">
                <div className="inline-block">
                    <h2 className="container w-full bg-teal-300 mb-0">
                        Mission Patches
                    </h2>
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={res.response.length}
                    paginate={paginate}
                    align="end"
                />
            </div>
            <div className="container mx-auto grid gap-6 md:grid-cols-4 mb-12 cursor-pointer">
                {responsePage.map((launch, i) => {
                    return (
                        <Card
                            key={i}
                            link={`/space-x/launch/${launch.name}`}
                            image={launch.patch ? launch.patch : spacex}
                            title={launch.name}
                            tag1={launch.flight_number}
                            tag2={launch.rocket}
                            tag3={launch.year}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SpacexPatches;
