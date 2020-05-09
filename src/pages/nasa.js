import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RoverPhotos from "../components/RoverPhotos";
// import MarsWeather from "../../components/MarsWeather";
import nasa_logo from "../images/nasa_logo.svg";
import { useSpring, animated } from "react-spring";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function Nasa() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } }); //Fade animation
    const [selectRover, setSelectRover] = useState({});
    const [selectCamera, setSelectedCamera] = useState({});

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
        { value: "Opportunity", label: "Navigation Camera" },
        { value: "Curiosity", label: "Front Hazard Avoidance Camera" },
        { value: "Spirit", label: "Rear Hazard Avoidance Camera" },
    ];

    const chooseCamera = [
        { value: "FHAZ", label: "Curiosity" },
        { value: "RHAZ", label: "Spirit" },
        { value: "NAVCAM", label: "Opportunity" },
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
            <animated.div style={fade} className="container mx-auto pt-24">
                <div className="mb-12">
                    <div className="md:w-9/12 mx-auto text-center">
                        <h1 className="mb-3">NASA</h1>
                        <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                            The National Aeronautics and Space Administration
                            (NASA) is an independent agency of the United States
                            Federal Government responsible for the civilian
                            space program, as well as aeronautics and aerospace
                            research.
                        </h3>
                    </div>

                    <img
                        className="w-full md:w-9/12 mx-auto bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-20 rounded-md py-10 px-10 md:py-20 md:px-20"
                        src={nasa_logo}
                        alt="Mars Rover"
                    />
                </div>

                <div className="container md:w-9/12 mx-auto mb-10 md:mt-20">
                    {/* <MarsWeather /> */}

                    <div className="rounded-md mt-20">
                        <div className="mb-10 text-left">
                            <h2 className="md:w-4/5 line-block flex-1 mb-8">
                                Curiosity Mars rover photos (Mast camera)
                            </h2>
                            <p className="md:w-4/5 mb-12">
                                Spirit and Opportunity landed on Mars January 3
                                and January 24, 2004 PST (Jan. 4 and Jan. 25
                                UTC). Both rovers lived well beyond their
                                planned 90-day missions. Spirit and Opportunity
                                found evidence for past wet conditions that
                                possibly could have supported microbial life.
                            </p>
                        </div>
                        <div className="flex mb-4 justify-between">
                            <div className="flex-1">
                                <h4 className="mb-3">Rover Name</h4>
                                <Select
                                    options={chooseRover}
                                    placeholder="Select Rover"
                                    width="400px"
                                    theme={reactSelectCustomTheme}
                                    autoFocus
                                    isSearchable
                                    onChange={selectRover}
                                />
                            </div>

                            <div className="flex-1">
                                <h4 className="mb-3">Camera</h4>
                                <Select
                                    options={chooseCamera}
                                    placeholder="Select camera"
                                    defaultValue="NAVCAM"
                                    defaultInputValue="Navigation Camera"
                                    theme={reactSelectCustomTheme}
                                    autoFocus
                                    isSearchable
                                    onChange={selectCamera}
                                />
                            </div>
                        </div>

                        <RoverPhotos
                            rover={selectRover}
                            camera={selectCamera}
                        />
                    </div>
                </div>
            </animated.div>
        </Layout>
    );
}

export default Nasa;
