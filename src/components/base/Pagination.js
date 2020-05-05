import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="inline-block h-auto mt-6 md:mt-0">
            <ul className="md:flex flex-row">
                {pageNumbers.map(number => (
                    <li className="inline-block ml-1">
                        <button
                            className="inline-block py-1 px-3 border border-black-500 hover:border-teal-300 focus:bg-teal-300 focus:outline-none rounded-sm text-sm"
                            key={number}
                            onClick={() => paginate(number)}
                            href="#"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
