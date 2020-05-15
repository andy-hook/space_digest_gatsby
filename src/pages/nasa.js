import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RoverPhotos from "../components/RoverPhotos";
// import MarsWeather from "../../components/MarsWeather";
import FiftyFifty from "../components/base/FiftyFifty";
import nasa_logo from "../images/nasa_logo.svg";
import { useSpring, animated } from "react-spring";
// import Select from "react-select";
import makeAnimated from "react-select/animated";
import curiosityRover from "../images/curiosityRover.jpg";
import TransitionPageIn from "../components/TransitionPageIn";

function Nasa() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } }); //Fade animation
    const [selectRover, setSelectRover] = useState("curiosity");
    const [selectCamera, setSelectCamera] = useState("NAVCAM");

    function reactSelectCustomTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary50: "#4AFFE8",
                primary25: "#81e6d9",
                primary: "#dbf4f1",
            },
        };
    }

    // Select option for react-select
    const chooseRover = [
        { value: "opportunity", label: "Opportunity" },
        { value: "curiosity", label: "Curiosity" },
        { value: "spirit", label: "Spirit" },
    ];
    const chooseCamera = [
        { value: "FHAZ", label: "Front Hazard Avoidance Camera" },
        { value: "NAVCAM", label: "Navigation Camera" },
        { value: "RHAZ", label: "Rear Hazard Avoidance Camera" },
    ];

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
                <div className="container mx-auto pt-20 md:pt-24">
                    <div className="mb-12">
                        <div className="md:w-9/12 mx-auto text-center">
                            <h1 className="md:text-9xl text-5xl mb-5">NASA</h1>
                            <h3 className="md:w-9/12 mx-auto md:leading-tight mb-1">
                                The National Aeronautics and Space
                                Administration (NASA) is an independent agency
                                of the United States Federal Government
                                responsible for the civilian space program, as
                                well as aeronautics and aerospace research.
                            </h3>
                        </div>

                        <img
                            className="w-full md:w-9/12 mx-auto bg-gray-200 mt-10 sm:mt-12 mb-0 md:mb-16 md:mb-20 rounded-md py-10 px-10 md:py-20 md:px-20"
                            src={nasa_logo}
                            alt="Mars Rover"
                        />
                    </div>

                    <div className="container md:w-9/12 mx-auto mb-10 mt-0 md:mt-20">
                        {/* <MarsWeather /> */}

                        <div className="rounded-md mt-10 md:mt-20">
                            <div className="mb-10 text-left text-center">
                                <h2 className="md:w-4/5 line-block flex-1 mb-8 mx-auto">
                                    Mars rovers
                                </h2>

                                <p className="md:w-4/5 mb-12 mx-auto">
                                    Spirit and Opportunity landed on Mars
                                    January 3 and January 24, 2004 PST (Jan. 4
                                    and Jan. 25 UTC). Both rovers lived well
                                    beyond their planned 90-day missions. Spirit
                                    and Opportunity found evidence for past wet
                                    conditions that possibly could have
                                    supported microbial life.
                                </p>
                            </div>

                            <RoverPhotos />
                        </div>
                    </div>
                </div>
            </TransitionPageIn>
        </Layout>
    );
}

export default Nasa;
