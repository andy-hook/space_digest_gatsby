import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";
import Pagination from "./base/Pagination";

function PhotosPage() {
    const res = useFetch("/api/photo-collection/photos", {});
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    console.log("Photos fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto h-screen text-center">
                <Loader className="inline-block" />
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
        <div className="text-center">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={res.response.length}
                paginate={paginate}
            />

                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover mt-10">
                    {responsePage.map((photo, i) => {
                        return (
                            <img
                                className="object-cover object-center h-74 w-full rounded-md col-span-1"
                                src={photo.href}
                                key={i}
                                alt={photo.title}
                            />
                        );
                    })}
                </div>

        </div>
    );
}
export default PhotosPage;
