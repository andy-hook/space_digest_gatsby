import React from "react";
import { useSpring, animated } from "react-spring";

function Page__about() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div
            style={fade}
            className="container md:w-3/4 mx-auto pt-20 md:pt-30 md:mb-12 "
        >
            <h1 className="w-2/4">About</h1>
            <p className="md:w-2/4 block">
                Space Digest is an informational website created as a personal
                project for fans of Nasa, SpaceX and space in general. Here you
                will find data, media, past and future space missions.
            </p>
            <p className="md:w-2/4 block mt-6">
                Special thanks to the teams at NASA and SpaceX for providing and
                maintaining all the data this website is built upon.
            </p>
            <p className="md:w-2/4 block mt-6">
                The plan for the future includes further development for a
                better experience. Feel free to say hey at:
            </p>
            <p className="md:w-2/4 block mt-6">hi@spacedigest.live</p>
            <p className="md:w-2/4 block mt-6">
                Thanks for visiting
                <span className="ml-3" role="img" aria-label="horns up emoji">
                    🤘🏻
                </span>{" "}
            </p>
            <p className="md:w-2/4 block mt-6">P.</p>
        </animated.div>
    );
}

export default Page__about;
