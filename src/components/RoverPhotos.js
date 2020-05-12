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

    // const photos = res.response.photos;

    console.log("Photos-->", photos);

    return (
        <>
            <div class="grid grid-cols-3 gap-4 bg-gray-100 px-12 py-8 mb-10 rounded-md text-center">
                <div>
                    <p className="text-xs uppercase">Rover name: </p>
                    <h4 className="text-xl">{photos[0].rover.name}</h4>
                </div>

                <div>
                    <p className="text-xs uppercase">Mars Sol: </p>
                    <h4 className="text-xl">{photos[0].sol}</h4>
                </div>
                <div>
                    <p className="text-xs uppercase"> Earth Date: </p>
                    <h4 className="text-xl">
                        <Moment format="DD/MM/YYYY">
                            {photos[0].earth_date}
                        </Moment>
                    </h4>
                </div>

                <div>
                    <p className="text-xs uppercase"> Launch Date: </p>
                    <h4 className="text-xl">
                        <Moment format="DD/MM/YY">
                            {photos[0].rover.launch_date}
                        </Moment>
                    </h4>
                </div>
                <div>
                    <p className="text-xs uppercase"> Landing Date: </p>
                    <h4 className="text-xl">
                        <Moment format="DD/MM/YY">
                            {photos[0].rover.landing_date}
                        </Moment>
                    </h4>
                </div>
                <div>
                    <p className="text-xs uppercase"> Status: </p>
                    <h4 className="text-xl">{photos[0].rover.status}</h4>
                </div>
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
