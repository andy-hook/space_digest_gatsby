import React, { useState, useEffect } from "react";
import Select from "react-select";
import TransitionInview from "../transitionInview";

function RoverSelect() {
    const [selectCamera, setSelectCamera] = useState({});
    const [selectRover, setSelectRover] = useState({});

    console.log("selectCamera", selectCamera);
    console.log("selectRover", selectRover);

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

    function handleCameraChange(event) {
        setSelectCamera(event);
        return setSelectCamera;
    }

    function handleRoverChange(value) {
        setSelectRover(value);
        return setSelectRover;
    }

    return (
        <TransitionInview>
            <div className="md:flex justify-between z-50">
                <div className="md:inline-block sm:w-2/5">
                    <h4 className="mb-3">Rover Name</h4>

                    <Select
                        onChange={handleRoverChange}
                        options={chooseRover}
                        placeholder="Select Rover"
                        autoFocus
                        isSearchable
                        theme={reactSelectCustomTheme}
                        defaultValue={chooseRover[1]}
                    />
                </div>

                <div className="md:inline-block sm:w-2/5 mb-10 md:mb-0 mt-6 md:mt-0">
                    <h4 className="mb-3 ">Camera</h4>
                    <Select
                        onChange={handleCameraChange}
                        options={chooseCamera}
                        placeholder="Select camera"
                        isSearchable
                        theme={reactSelectCustomTheme}
                        defaultValue={chooseCamera[1]}
                    />
                </div>
            </div>
        </TransitionInview>
    );
}

export default RoverSelect;
