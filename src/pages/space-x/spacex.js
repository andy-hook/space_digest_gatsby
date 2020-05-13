import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SpacexPatches from "../../components/SpacexPatches";
import spacex_logo from "../../images/spacex_logo.svg";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../../components/TransitionPageIn";

function Spacex() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
    const props = useSpring({ number: 2002, from: { number: 0 } });

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
                title="Nasa"
            />
            <TransitionPageIn>
                <div className="container mx-auto pt-24">
                    <div className="mb-6 md:mb-12">
                        <div className="md:w-9/12 mx-auto text-center">
                            <h1 className="mb-3">SpaceX</h1>
                            <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                                SpaceX designs, manufactures and launches
                                advanced rockets and spacecraft. The company was
                                founded in 2002 to revolutionize space
                                technology, with the ultimate goal of enabling
                                people to live on other planets.
                            </h3>
                            <p className="inline-block pt-4 mr-10">
                                HQ: Hawthorne - California
                            </p>
                            <p className="inline-block py-1 ">
                                Address: Rocket Road
                            </p>
                        </div>
                    </div>
                    <img
                        className="md:w-9/12 mx-auto bg-gray-200 mt-6 md:mt-12 md:mb-32 mb-16 py-16 pl-8 md:py-48 md:pr-20 md:pl-32 rounded-md"
                        src={spacex_logo}
                        alt="Mars Rover"
                    />

                    <SpacexPatches />
                </div>
            </TransitionPageIn>
        </Layout>
    );
}

export default Spacex;
