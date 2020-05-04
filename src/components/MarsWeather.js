import React from "react";
import useFetch from "../components/hooks/useFetch";
import Loader from "./base/Loader";
import Moment from "react-moment";
// import nasa_logo from "../img/nasa_logo.svg";
// import curiosityRover from "../img/curiosityRover.jpg";
import marsLandscape from "../img/mars-landscape.svg";

function MarsWeather() {
    const res = useFetch("/api/mars-weather/:weather", {});

    console.log("Weather fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    const solData = res.response;

    return (
        <div
            className="mx-auto md:pr-30 bg-gray-100 md:py-10 md:px-10 rounded-md bg-cover text-orange-900"
            style={{ backgroundImage: `url("${marsLandscape}")` }}
        >
            <div className="px-4 py-6">
                <h2 className="block mb:w-9/12 mx-auto">
                    Weather on Mars equator
                </h2>
                <p className="md:w-3/4">
                    InSight is taking daily weather measurements (temperature,
                    wind, pressure) on the surface of Mars at Elysium Planitia,
                    a flat, smooth plain near Mars’ equator.
                </p>
            </div>

            <div className="md:w-full mx-auto text-center">
                <div className="hidden md:block w-full md:flex my-8 py-6 px-4 text-left ">
                    <div>
                        <p className="inline-block text-5xl font-bold">
                            <span className="font-bold">Sol</span>{" "}
                            {solData[solData.length - 1].marsSol}
                        </p>
                        <p>
                            <span className="font-bold">Earth date:</span>{" "}
                            <Moment format="DD/MM">
                                {solData[solData.length - 1].earth_date}
                            </Moment>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold">Season:</span>{" "}
                            {solData[solData.length - 1].season}
                        </p>
                        <p>
                            <span className="font-bold">high: </span>
                            {solData[solData.length - 1].temperature.max}° F
                        </p>
                        <p>
                            <span className="font-bold">low: </span>
                            {solData[solData.length - 1].temperature.min}° F
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row mx-auto md:py-8 md:bg-orange-100 md:rounded-md opacity-75 md:mt-0 py-8">
                    {solData.map(data => {
                        return (
                            <div
                                className="flex-1 md:text-xs py-5 px-4 md:px-0 text-left"
                                key={data.marsSol}
                            >
                                <ul className="odd:bg-orange-100">
                                    <li className="text-xl md:text-xs md:pl-4 ">
                                        <span className="font-bold">Sol: </span>
                                        {data.marsSol}
                                    </li>

                                    <li className="text-xl md:text-xs md:pl-4 ">
                                        <span className="font-bold">
                                            Earth date:{" "}
                                        </span>
                                        <Moment format="DD/MM">
                                            {data.earth_date}
                                        </Moment>
                                    </li>
                                    <li className="text-xl md:text-xs md:pl-4 ">
                                        <span className="font-bold">
                                            high:{" "}
                                        </span>
                                        {data.temperature.max}° F
                                    </li>
                                    <li className=" text-xl md:text-xs md:pl-4 ">
                                        <span className="font-bold">low: </span>
                                        {data.temperature.min}° F
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default MarsWeather;
