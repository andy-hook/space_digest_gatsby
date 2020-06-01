import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useSpring, animated } from "react-spring";
import RoverPhotos from "../components/roverPhotos/roverPhotos";
import nasa_logo from "../images/nasa_logo.svg";
import FiftyFifty from "../components/base/fiftyFifty";
import TransitionPageIn from "../components/transitionPageIn";
import TransitionInview from "../components/transitionInview";
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
                        <div className="w-9/12 mx-auto text-center mb-16">
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
                                <div
                                    class="h-8 md:h-64 bg-fixed md:my-6"
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

                    <div className="px-8 md:w-9/12 mx-auto mb-10 mt-0 md:mt-20">
                        {/* <MarsWeather /> */}
                        <TransitionInview>
                            <div className="md:container mx-auto md:flex mt-16 md:mt-32 mb-12 md:mb-24 border-b-2 border-black text-left">
                                <h3 className="md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-3xl">
                                    Mars rovers
                                </h3>

                                <p className="md:w-7/12 mb-20 mx-auto">
                                    Spirit and Opportunity landed on Mars
                                    January 3 and January 24, 2004 PST (Jan. 4
                                    and Jan. 25 UTC). Both rovers lived well
                                    beyond their planned 90-day missions. Spirit
                                    and Opportunity found evidence for past wet
                                    conditions that possibly could have
                                    supported microbial life.
                                </p>
                            </div>
                        </TransitionInview>
                        <TransitionInview>
                            <div className="px-8 md:w-7/12 mx-auto text-center mb-16 md:mb-20">
                                <h2 className="mb-6 font-bold">
                                    Mars Rover Images
                                </h2>
                                <p className="mb-10">
                                    Select your favourite Mars Rover and cameras
                                    to display images from Mars
                                </p>
                            </div>
                        </TransitionInview>
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
