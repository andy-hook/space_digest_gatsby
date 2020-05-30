import React, { useState } from "react";
import Select from "react-select";
import TransitionInview from "../TransitionInview";

function RoverSelect() {
    const [selectCamera, setSelectCamera] = useState("NAVCAM");
    const [selectRovera, setSelectRover] = useState("curiosity");

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
        <TransitionInview>
            <div className="flex mb-10 justify-between z-50">
                <div className="inline-block sm:w-2/5">
                    <h4 className="mb-3">Rover Name</h4>

                    <Select
                        onChange={setSelectRover}
                        options={chooseRover}
                        placeholder="Select Rover"
                        autoFocus
                        isSearchable
                        theme={reactSelectCustomTheme}
                    />
                </div>

                <div className="inline-block sm:w-2/5">
                    <h4 className="mb-3">Camera</h4>
                    <Select
                        onChange={setSelectCamera}
                        options={chooseCamera}
                        placeholder="Select camera"
                        isSearchable
                        theme={reactSelectCustomTheme}
                    />
                </div>
            </div>
        </TransitionInview>
    );
}

export default RoverSelect;
