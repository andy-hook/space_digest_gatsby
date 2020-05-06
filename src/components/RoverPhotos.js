import React, { Component } from "react";
import Loader from "./base/Loader";


const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const API_KEY      = 'api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN';
const CAMERA       = "NAVCAM";
const ROVERNAME    = "NAVCAM";
const SOL          = "400"

class RoverPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            roverImages: null
        };
    }

    async componentDidMount() {
        await fetch(`${API_BASE_URL}manifests/${ROVERNAME}?${API_KEY}`)
            .then(res => res.json())
            .then(sols_with_photos => {
                const random_index = Math.floor(
                    Math.random() * sols_with_photos.length
                );
                return sols_with_photos[random_index].sol;
            })
            .then(random_sol => {
                fetch(`${API_BASE_URL}rovers/${ROVERNAME}/photos?sol=${SOL}&camera=${CAMERA}&${API_KEY}`)
                    .then(res => res.json())
                    .then(photos => {
                        this.setState(
                            {
                                isLoaded: true,
                                photos
                            },
                            () =>
                                console.log(
                                    "Rover Photos fetched! --->>>",
                                    photos
                                )
                        );
                    });
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, photos } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="container mx-auto text-center">
                    <Loader className="inline-block" />
                </div>
            );
        } else {
            return (
                <div className="container mx-auto">

                        <div className="md:grid gap-6 md:grid-cols-3 rounded-md">
                            {photos.map(photo => {
                                return (
                                    <img
                                        className="w-full rounded-sm cursor-pointer"
                                        src={photo.img_src}
                                        key={photo.id}
                                        alt="Scene from Mars Rover"
                                    />
                                );
                            })}
                        </div>

                </div>
            );
        }
    }
}
export default RoverPhotos;
