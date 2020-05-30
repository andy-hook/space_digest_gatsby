import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useSpring, animated } from "react-spring";
import RoverPhotos from "../components/RoverPhotos/RoverPhotos";
import nasa_logo from "../images/nasa_logo.svg";
import makeAnimated from "react-select/animated";
import FiftyFifty from "../components/base/FiftyFifty";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
// import curiosityRover from "../images/curiosityRover.jpg";
// import MarsWeather from "../../components/MarsWeather";

function Nasa() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } }); //Fade animation
    const [selectRover, setSelectRover] = useState("curiosity");
    const [selectCamera, setSelectCamera] = useState("NAVCAM");

    return (
        <Layout>
            <SEO
                keywords={[
                    `Nasa`,
                    `Spacex`,
                    `Space`,
                    `star`,
                    `gatsby`,
                    `tailwind`,
                    `react`,
                    `tailwindcss`,
                ]}
                title="Nasa"
            />
            <TransitionPageIn>
                <div className="mx-auto pt-20 md:pt-24">
                    <div className="mb-12">
                        <div className="w-9/12 mx-auto text-center">
                            <h1 className="md:text-9xl text-5xl mb-5">NASA</h1>
                            <h3 className="md:w-7/12 mx-auto md:leading-tight mb-1">
                                The National Aeronautics and Space
                                Administration (NASA) is an independent agency
                                of the United States Federal Government
                                responsible for the civilian space program, as
                                well as aeronautics and aerospace research.
                            </h3>
                        </div>
                        <TransitionInview>
                            <div className="w-full bg-primary mt-10 sm:mt-12 mb-0 md:mb-16 md:mb-20 py-2">
                                {/* <img
                                    className="w-7/12 mx-auto md:pl-20"
                                    src={nasa_logo}
                                    alt="Mars Rover"
                                /> */}
                                <div
                                    class="h-10 md:h-64 bg-fixed md:my-10 "
                                    style={{
                                        backgroundImage: `url(${nasa_logo})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                            </div>
                        </TransitionInview>
                    </div>

                    <div className="container md:w-9/12 mx-auto mb-10 mt-0 md:mt-20">
                        {/* <MarsWeather /> */}

                        <div className="w-7/12 mx-auto md:text-center">
                            <h3 className="mb-6 font-bold">
                                Mars Rover Images
                            </h3>
                            <p className="mb-10">
                                Select your favourite Mars Rover and three
                                different cameras to display images from Mars
                            </p>
                        </div>

                        <TransitionInview>
                            <RoverPhotos />
                        </TransitionInview>
                    </div>
                </div>
            </TransitionPageIn>
        </Layout>
    );
}

export default Nasa;
