import React, { useContext } from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { SpacexLaunchesContext } from "../../context/SpacexLaunchesContext";
import Loader from "../../components/base/Loader";
import VideoFeatured  from "../../components/base/VideoFeatured";
import Moment from "react-moment";
import spacex from "../../images/spacex.png";
import { useSpring, animated } from "react-spring";

function Launch(props) {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    // console.log("Match", props.match);

    const res = useContext(SpacexLaunchesContext);

    if (!res.response) {
        return (
            <div className="mx-auto pt-20 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }
    console.log("Launch fetched! --->>>", res);

    const pageData = res.response
        .map(res => res)
        .filter(res => res.name === props.match.params.id);

    console.log({ pageData });

    return (
        <Layout>
            <SEO
                keywords={[`Nasa`, `Spacex`,`Space`, `star`,`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Spacex launches"
            />
            <animated.div
                style={fade}
                className="mx-auto pt-24 mb-16 md:mb-12 md:pt-32 md:mb-10"
            >
                <div className="container md:flex md:flex-row-reverse items-end">
                    <Link
                        className="order-first block text-black text-xl md:text-2xl underline hover:color-teal-300 mb-4 md:mb-10"
                        to="/space-x"
                    >
                        Back
                    </Link>
                    <h1 className="inline-block flex-1 mt-0 mb-8">
                        {props.match.params.id}
                    </h1>
                </div>

                {!pageData[0].upcoming ? (
                    <VideoFeatured
                        className="w-screen mb-10"
                        width="100vw"
                        height="46vw"
                        url={pageData[0].links.video_link}
                    />
                ) : null}

                <div className="container flex flex-col md:flex-row md:my-20">
                    <div className="flex-1 bg-gray-100  mt-10 md:mt-0 md:mr-20">
                        <img
                            className="py-10 px-10 md:py-20 md:px-20 inline-block bg-grey-300"
                            src={pageData[0].patch ? pageData[0].patch : spacex}
                            alt="spacex misson patch"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="h-full md:flex flex-col justify-between">
                            <div>
                                <h2 className="hidden md:inline-block bg-teal-300 mt-10 md:mt-0 md:mb-8">
                                    {props.match.params.id}
                                </h2>

                                <p className="inline-block">
                                    {pageData[0].details}
                                </p>
                                {pageData[0].failure_details ? (
                                    <p className="inline-block pb-8">
                                        Failure details:{" "}
                                        {pageData[0].failure_details.reason}
                                    </p>
                                ) : null}

                                <p className="block text-bold mb-10 md:mt-8 ">
                                    {" "}
                                    <strong>Launch Date:&nbsp;</strong>
                                    <Moment format="DD/MM/YYYY">
                                        {pageData[0].launch_date}
                                    </Moment>
                                </p>
                            </div>

                            <div>
                                <ul>
                                    <li className="flex flex-col md:flex-row">
                                        <a
                                            className="a inline-block mr-16"
                                            href={pageData[0].links.article_link}
                                        >
                                            Article
                                        </a>
                                        <a
                                            className="a inline-block"
                                            href={pageData[0].links.wikipedia}
                                        >
                                            Wikipedia
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Load Images if present */}
                {pageData[0].links.flickr_images !== undefined &&
                pageData[0].links.flickr_images.length > 0 ? (
                    <>
                        <div className="container mx-auto mt-20 md:mt-32">
                            <h2 className="md:inline-block bg-teal-300 mt-10 md:mt-0">
                                Launch Images
                            </h2>
                        </div>
                        <SRLWrapper>
                            <div className="container grid gap-6 grid-cols-1 md:grid-cols-3 mt-10 md:mt-10 cursor-pointer">
                                {pageData[0].links.flickr_images.map((photo, i) => {
                                    return (
                                        <img
                                            className="object-cover object-center h-74 w-full rounded-sm"
                                            src={photo}
                                            key={i}
                                            alt="Mission Launch"
                                        />
                                    );
                                })}
                            </div>
                        </SRLWrapper>
                    </>
                ) : null}
            </animated.div>
        </Layout>
    );
}

export default Launch;
