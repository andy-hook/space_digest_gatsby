import React from "react";
import useFetch from "../hooks/useFetch";
import VideoFeatured from "../components/base/VideoFeatured";
import Loader from "../components/base/Loader";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Media() {
    const res = useFetch(
        "https://api.nasa.gov/planetary/apod?api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN",
        {}
    );

    // console.log("Media fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center pt-64">
                <Loader className="inline-block" />
            </div>
        );
    }

    const mediaData = res.response;

    if (mediaData.media_type !== "video") {
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
                    title="Daily media"
                />
                <TransitionPageIn>
                    <TransitionInview>
                        {/* Media Image */}
                        <div className="px-8 md:container md:w-9/12 mx-auto mb-12 md:mb-16 pt-32 md:pt10 md:pt-32">
                            <h2 className="inline-block md:w-w-64 mb-2 md:mb-10">
                                Daily Astronomy Image
                            </h2>
                            <img
                                className="w-full mx-auto md:mb-12 rounded-sm cursor-pointer rounded-md"
                                src={mediaData.url}
                                alt={mediaData.title}
                            />

                            <div className="md:container mx-auto mt-4 md:mt-12 md:mt-16 md:mb-16 md:mb-20">
                                <div className="md:flex pt-8 md:pt-10 pb-10 md:pb-16 px-4 md:px-32 text-left bg-secondary rounded-md">
                                    <p className="inline-block flex-1 pt-5 font-bold">
                                        {mediaData.title}
                                    </p>
                                    <p className="md:w-3/5 mx-auto md:pr-16 pt-5">
                                        {mediaData.explanation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TransitionInview>
                </TransitionPageIn>
                {/* !END of Media Image */}
            </Layout>
        );
    } else {
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
                    title="Daily media"
                />
                {/* Media Videos */}
                <TransitionPageIn>
                    <TransitionInview>
                        <div className="container mx-auto text-center mt-10">
                            <h2 className="md:w-9/12 mx-auto mb-12">
                                Daily Astronomy Video
                            </h2>
                            <VideoFeatured
                                width="100vw"
                                height="46vw"
                                url={mediaData.url}
                            />
                            <div className="container md:w-9/12 mx-auto mt-12 md:mt-16 mb-16 md:mb-20">
                                <div className="flex pt-10 pb-16 px-16 text-left bg-gray-100 rounded-md">
                                    <h2 className="w-1/3 inline-block flex-1 pl-5 pr-5 pt-5">
                                        {mediaData.title}
                                    </h2>
                                    <p className="w-4/5 mx-auto pl-16 pt-5">
                                        {mediaData.explanation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TransitionInview>
                </TransitionPageIn>
                {/* !END of Media Video */}
            </Layout>
        );
    }
}

export default Media;
