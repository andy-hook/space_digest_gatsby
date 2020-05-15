import React from "react";
import ReactPlayer from "react-player";

function VideoFeatured({ url, width, height, className }) {
    return (
        <ReactPlayer
            className={className}
            url={url}
            playing
            controls={true}
            muted={true}
            width={width}
            height={height}
        />
    );
}

export default VideoFeatured;
