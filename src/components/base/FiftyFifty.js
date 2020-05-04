import React from "react";
import Button from "./Button";

function FiftyFifty({
    width,
    background,
    image,
    title,
    text,
    btn_text,
    link,
    padding,
    padding_img,
    reverse
}) {
    return (
        <div
            className={`container mx-auto flex flex-col md:flex-row md:mt-24 md:mb-32
                ${width ? width : "w-9/12"}
                ${padding ? padding : " "}
                ${reverse && "md:flex-row-reverse"}`}
        >
            <div
                className={`flex-1 md:mt-0 rounded-lg
                    ${background && "bg-gray-100"}
                    ${reverse ? "md:mr-0 md:ml-20" : "md:mr-20"}`}
            >
                <img
                    className={`w-full h-full
                    ${padding_img && padding_img} `}
                    src={image ? image : ""}
                    alt="spacex misson patch"
                />
            </div>
            <div className="flex-1 mb-12 md:my-0">
                <div className="h-full md:flex flex-col justify-between">
                    <div>
                        <h2 className="font-title font-bold md:inline-block bg-teal-300">
                            {title}
                        </h2>
                        <p className="block text-bold pt-6 md:pt-0  md:mt-4">
                            {text}
                        </p>
                    </div>

                    <Button btn_text={btn_text} link={link} />
                </div>
            </div>
        </div>
    );
}

export default FiftyFifty;
