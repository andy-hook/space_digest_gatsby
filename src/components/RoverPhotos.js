import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
import Moment from "react-moment";

function RoverPhotos({ rover, selectCamera }) {
    const randomSol = Math.floor(Math.random() * 1001);
    const roverName = "curiosity";

    const res = useFetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${randomSol}&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN`,
        {}
    );

    console.log("Media fetched! --->>>", res.response);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    const photos = res.response.photos.filter((camera) =>
        camera.camera.name.includes("NAVCAM")
    );

    // const photos = res.response.photos;

    console.log("Photos-->", photos);

    return (
        <>
            <div>
                <h4>Rover name: {photos[0].rover.name}</h4>
                <h4>Mars Sol: {photos[0].sol}</h4>
                <h4>
                    Earth Date:
                    <Moment format="DD/MM/YYYY">{photos[0].earth_date}</Moment>
                </h4>

                <h4>
                    Launch Date:
                    <Moment format="DD/MM/YY">
                        {photos[0].rover.launch_date}
                    </Moment>
                </h4>

                <h4>
                    Landing Date:
                    <Moment format="DD/MM/YY">
                        {photos[0].rover.landing_date}
                    </Moment>
                </h4>
                <h4>Status: {photos[0].rover.status}</h4>
            </div>
            <div className="container mx-auto md:grid gap-6 md:grid-cols-3 rounded-md">
                {photos.map((photo) => {
                    return (
                        <img
                            className="w-full rounded-sm cursor-pointer"
                            key={photo.id}
                            src={photo.img_src}
                            alt="Scene from Mars Rover"
                        />
                    );
                })}
            </div>
        </>
    );
}
export default RoverPhotos;
