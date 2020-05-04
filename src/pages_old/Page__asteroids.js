import React from "react";
import Asteroids from "../components/Asteroids";
import asteroid from "../img/asteroid.jpg";
import { useSpring, animated } from "react-spring";

function Page__asteroids() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={fade} className="container mx-auto pt-24">
            <div className="md:w-9/12 mx-auto text-center">
                <h1 className="mb-3">Asteroids</h1>

                <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                    NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth.
                    <a
                        className="block text-black text-base md:text-2xl  pt-6 md:pt-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cneos.jpl.nasa.gov/"
                    >
                        CNEOS - Center for Near Earth Object Studies
                    </a>
                </h3>
                <img
                    className="w-full bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-32"
                    src={asteroid}
                    alt="Mars Rover"
                />

                <Asteroids />
            </div>
        </animated.div>
    );
}

export default Page__asteroids;
