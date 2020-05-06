import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
// import Pagination from "./base/Pagination";

function PhotosPage() {
    const res = useFetch("https://images-api.nasa.gov/search?q=launch&media_type=image", {});
    // // Pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(15);

    console.log("Photos fetched! --->>>", res.response);

    if (!res.response) {
        return (
            <div className="container mx-auto h-screen text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    // // Pagination - Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // let responsePage = res.response.slice(indexOfFirstPost, indexOfLastPost);
    // // Pagination - Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);

    const photos = res.response.collection;
    console.log('Photos', photos);

    return (
        // <div className="text-center">
        //     <Pagination
        //         postsPerPage={postsPerPage}
        //         totalPosts={res.response.length}
        //         paginate={paginate}
        //     />

            <div className="text-center">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover mt-10">
                    {photos.items.map((photo, i) => {
                        return (
                            <img
                                className="object-cover object-center h-74 w-full rounded-md col-span-1"
                                src={photo.links[0].href}
                                key={i}
                                alt={photo.data[0].title}
                            />
                        );
                    })}
                </div>
            </div>

    );
}
export default PhotosPage;
