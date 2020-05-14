import React from "react";
import { Link } from "gatsby";

function Button({ btn_text, link, bgColor, textColor, hoverTextColor }) {
    return (
        <button
            className={`w-full py-2 px-4 mt-8 rounded border border-4 border-black hover:bg-teal-300 hover:border-transparent hover:border-black  bg-${
                bgColor ? bgColor : "transparent"
            }
            text-${textColor ? textColor : "black"}
            hover:text-${hoverTextColor ? hoverTextColor : "black"}
            ${btn_text ? "block" : "hidden"}`}
        >
            <Link className="block text-black text-base md:text-2xl" to={link}>
                {btn_text}
            </Link>
        </button>
    );
}

export default Button;
