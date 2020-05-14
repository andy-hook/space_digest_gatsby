import React from "react";
import VideoFeatured from "./base/VideoFeatured";
import TransitionInview from "../components/TransitionInview";

function Header() {
    return (
        <div className="mx-auto text-center mb-8 md:mb-32 pt-6 md:pt-16">
            <h1 className="tracking-tight text-9xl">Space digest</h1>
            <h3 className="md:w-3/5 md:leading-tight mb-4 mx-auto">
                "Space is for everybody. It's not just for a few people in
                science or math, or for a select group of astronauts. That's our
                new frontier out there, and it's everybody's business to know
                about space."
            </h3>
            <span className="span text-xs md:text-base text-gray-600 mt-0 mb-8 md:mb-20">
                CHRISTA MCAULIFFE, 1985
            </span>
            <TransitionInview>
                <VideoFeatured
                    width="100vw"
                    height="46vw"
                    url="https://www.youtube.com/watch?v=Ilifg26TZrI"
                />
            </TransitionInview>
        </div>
    );
}

export default Header;
