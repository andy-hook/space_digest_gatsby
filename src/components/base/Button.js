import React from "react";
import { Link } from "gatsby";

function Button({ btn_text, link }) {
    return (
        <button
            className={`w-full bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-4 border-black hover:border-transparent hover:border-black rounded mt-8 ${
                btn_text ? "block" : "hidden"
            }`}
        >
            <Link className="block text-black text-base md:text-2xl" to={link}>
                {btn_text}
            </Link>
        </button>
    );
}

export default Button;
