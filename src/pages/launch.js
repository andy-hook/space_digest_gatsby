import React, { useContext } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useFetch from "../hooks/useFetch";
import Loader from "../components/base/Loader";
import VideoFeatured from "../components/base/VideoFeatured";
import spacex from "../images/spacex.png";
import Moment from "react-moment";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Launch(props) {
    const res = useFetch("https://api.spacexdata.com/v3/launches", []);

    console.log("Launches fetched! --->>>", res.response);

    if (!res.response) {
        return (
            <div className="mx-auto pt-20 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }

    const pageData = res.response
        .map((res) => res)
        .filter((res) => res.mission_name === props.id);

    // console.log("location", props.id);
    // console.log("Name", pageData[0].mission_name);
    // console.log("PageData", pageData);

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
                title="Spacex launches"
            />

            <div className="mx-auto pt-24 mb-16 md:mb-12 md:pt-32 md:mb-40">
                <TransitionInview>
                    <div className="container md:flex md:flex-row-reverse items-end">
                        <Link
                            className="order-first block text-black text-xl md:text-2xl underline hover:color-teal-300 mb-4 md:mb-10"
                            to="/spacex"
                        >
                            Back
                        </Link>
                        <h2 className="inline-block flex-1 mt-0 mb-8">
                            {props.id}
                        </h2>
                    </div>
                </TransitionInview>
                {!pageData[0].upcoming ? (
                    <TransitionInview>
                        <VideoFeatured
                            className="container mb-10"
                            width="100vw"
                            height="46vw"
                            url={pageData[0].links.video_link}
                        />
                    </TransitionInview>
                ) : null}
                <TransitionInview>
                    <div className="container flex flex-col md:flex-row md:mt-24 md:mb-40git res">
                        <div className="flex-1 bg-gray-100  mt-10 md:mt-0 md:mr-20">
                            <img
                                className="py-10 px-10 md:py-20 md:px-20 inline-block bg-grey-300"
                                src={
                                    pageData[0].links.mission_patch
                                        ? pageData[0].links.mission_patch
                                        : spacex
                                }
                                alt="spacex misson patch"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="w-3/4 h-full md:flex flex-col justify-between">
                                <div>
                                    <h2 className="hidden md:inline-block mt-10 md:mt-0 md:mb-6">
                                        {props.id}
                                    </h2>

                                    <p className="inline-block">
                                        {pageData[0].details}
                                    </p>
                                    {pageData[0].launch_failure_details ? (
                                        <>
                                            <ul className="mt-10">
                                                <li>
                                                    Rocket name:{" "}
                                                    <span className="font-bold">
                                                        {
                                                            pageData[0].rocket
                                                                .rocket_name
                                                        }
                                                    </span>
                                                </li>
                                                <li>
                                                    Rocket type:{" "}
                                                    <span className="font-bold">
                                                        {
                                                            pageData[0].rocket
                                                                .rocket_type
                                                        }
                                                    </span>
                                                </li>
                                                <li>
                                                    Payload type:{" "}
                                                    <span className="font-bold">
                                                        {
                                                            pageData[0].rocket
                                                                .second_stage
                                                                .payloads[0]
                                                                .payload_type
                                                        }
                                                    </span>
                                                </li>
                                                <li>
                                                    Launch status:{" "}
                                                    <span className="font-bold">
                                                        {pageData[0]
                                                            .launch_success
                                                            ? "Success"
                                                            : "Failed"}
                                                    </span>
                                                </li>
                                                <li className="block mt-6 mb-2">
                                                    Failure details:{" "}
                                                    <span className="font-bold">
                                                        {
                                                            pageData[0]
                                                                .launch_failure_details
                                                                .reason
                                                        }
                                                    </span>
                                                </li>
                                                <li className="block mt-6 mb-2">
                                                    Launch Date:{" "}
                                                    <span className="font-bold">
                                                        <Moment format="DD/MM/YYYY">
                                                            {
                                                                pageData[0]
                                                                    .launch_date
                                                            }
                                                        </Moment>
                                                    </span>
                                                </li>
                                            </ul>
                                        </>
                                    ) : null}
                                </div>

                                <div>
                                    <ul>
                                        <li className="flex flex-col md:flex-row">
                                            <a
                                                className="a inline-block mr-16"
                                                href={
                                                    pageData[0].links
                                                        .article_link
                                                }
                                            >
                                                Article
                                            </a>
                                            <a
                                                className="a inline-block"
                                                href={
                                                    pageData[0].links.wikipedia
                                                }
                                            >
                                                Wikipedia
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </TransitionInview>
                {/* Load Images if present */}
                {pageData[0].links.flickr_images !== undefined &&
                pageData[0].links.flickr_images.length > 0 ? (
                    <>
                        <TransitionInview>
                            <div className="container mx-auto mt-20 md:mt-32">
                                <h2 className="md:inline-block bg-teal-300 mt-10 md:mt-0">
                                    Launch Images
                                </h2>
                            </div>

                            <div className="container grid gap-6 grid-cols-1 md:grid-cols-3 mt-10 md:mt-10 cursor-pointer">
                                {pageData[0].links.flickr_images.map(
                                    (photo, i) => {
                                        return (
                                            <img
                                                className="object-cover object-center h-74 w-full rounded-sm"
                                                src={photo}
                                                key={i}
                                                alt="Mission Launch"
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </TransitionInview>
                    </>
                ) : null}
            </div>
        </Layout>
    );
}

export default Launch;
