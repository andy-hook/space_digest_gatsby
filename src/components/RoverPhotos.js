import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
import Moment from "react-moment";

function RoverPhotos({ selectRover, selectCamera }) {
    console.log("Prop passed", selectRover);
    console.log("Prop passed", selectCamera);

    const randomSol = Math.floor(Math.random() * 1001);

    const res = useFetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN`,
        {},
        [selectRover]
    );

    console.log("Media fetched! --->>>", res.response);

    if (!res.response) {
        return <Loader className="block w-1/4 mx-auto my-20" />;
    }

    const photos = res.response.photos.filter((item) =>
        item.camera.name.includes("NAVCAM")
    );

    return (
        <>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 bg-primary pl-12 md:px-12 py-6 md:py-8 mb-10 rounded-md md:text-center bg-primary">
                <div>
                    <p className="text-xs mb-1 uppercase">Rover name: </p>
                    <h3 className="text-base md:text-xl md:text-2xl">
                        {photos[0].rover.name}
                    </h3>
                </div>

                <div>
                    <p className="text-xs mb-1 uppercase">Mars Sol: </p>
                    <h4 className="text-base md:text-2xl">{photos[0].sol}</h4>
                </div>
                <div>
                    <p className="text-xs mb-1 uppercase">Earth Date: </p>
                    <h4 className="text-base md:text-2xl">
                        <Moment format="DD/MM/YYYY">
                            {photos[0].earth_date}
                        </Moment>
                    </h4>
                </div>

                <div>
                    <p className="text-xs mb-1 uppercase">Launch Date: </p>
                    <h4 className="text-base md:text-2xl ">
                        <Moment format="DD/MM/YY">
                            {photos[0].rover.launch_date}
                        </Moment>
                    </h4>
                </div>
                <div>
                    <p className="text-xs mb-1 uppercase"> Landing Date: </p>
                    <h4 className="text-base md:text-2xl">
                        <Moment format="DD/MM/YY">
                            {photos[0].rover.landing_date}
                        </Moment>
                    </h4>
                </div>
                <div>
                    <p className="text-xs mb-1 uppercase">Status: </p>
                    <h4 className="text-base md:text-2xl">
                        {photos[0].rover.status}
                    </h4>
                </div>
            </div>

            <div className="container mx-auto grid gap-6 grid-cols-2 md:grid-cols-3 rounded-md">
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
