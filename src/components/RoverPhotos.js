import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";

function RoverPhotos() {
    const res = useFetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN", {});


    // console.log("Media fetched! --->>>", res.response);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

	// const photos = res.response;
	const photos = res.response.photos;
	console.log(photos);

	return(
		<div className="container mx-auto md:grid gap-6 md:grid-cols-3 rounded-md">
			{photos.map((photo) => {
				return (
					<img
						className="w-full rounded-sm cursor-pointer"
						src={photo.img_src}
						key={photo.id}
						alt="Scene from Mars Rover"
					/>
				)
			})}
		</div>
	);
}
export default RoverPhotos;