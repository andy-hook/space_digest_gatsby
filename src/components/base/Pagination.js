import React, { useMemo } from "react";

const Pagination = ({ numberOfPages, onPageChange, activePageNumber }) => {
    const pageNumbers = useMemo(() =>
        Array(numberOfPages)
            .fill()
            .map((_, i) => i + 1)
    );

    return (
        <nav className="inline-block h-auto mt-6 md:mt-0">
            <ul className="md:flex flex-row">
                {pageNumbers.map((pageNumber, i) => (
                    <li className="inline-block ml-2" key={pageNumber}>
                        <button
                            className={`${
                                activePageNumber === i + 1 &&
                                `bg-teal-300 border-teal-300`
                            } inline-block border border-black-500 h-8 w-8 hover:border-teal-300 focus:bg-teal-300 rounded-full focus:outline-none rounded-sm text-sm`}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
