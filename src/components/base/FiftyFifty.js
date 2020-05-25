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
    reverse,
}) {
    return (
        <div
            className={`px-8 lg:container mx-auto flex flex-col md:flex-row mt-8 md:mt-12 md:mt-24 md:mb-32
                ${width ? width : "sm:w-8/12 md:w-11/12 xl:w-8/12"}
                ${padding ? padding : " "}
                ${reverse && "md:flex-row-reverse"}`}
        >
            <div
                className={`flex-1 md:mt-0 rounded-lg
                    ${background && "md:bg-gray-100"}
                    ${reverse ? "md:mr-0 md:ml-20" : "md:mr-20"}`}
            >
                <img
                    className={`inline w-12 md:w-full md:h-full rounded-md
                    ${padding_img && padding_img} `}
                    src={image ? image : ""}
                    alt="spacex misson patch"
                />
                {/* Apperars on mobile */}
                <h2 className="block md:hidden text-3xl font-bold inline md:inline-block mt-10 ml-5">
                    {title}
                </h2>
            </div>
            <div className="flex-1 mb-12 md:my-0">
                <div className="h-full md:flex flex-col justify-between">
                    <div>
                        <h2 className="hidden md:block font-title font-bold md:inline-block mt-10">
                            {title}
                        </h2>
                        <p className="block text-bold pt-3 md:pt-0 md:mt-2">
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
