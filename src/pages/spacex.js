import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SpacexPatches from "../components/SpacexPatches/SpacexPatches";
import spacex_logo from "../images/spacex_logo.svg";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Spacex(props) {
    //Fade animation
    // const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
    // const props = useSpring({ number: 2002, from: { number: 0 } });
    console.log("Props", props);
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
                <div className="pt-20 md:pt-24">
                    <div className="mb-6 md:mb-12">
                        <div className="w-9/12 mx-auto text-center">
                            <h1 className="md:text-9xl text-5xl">SpaceX</h1>
                            <h3 className="md:w-7/12 mx-auto md:leading-tight mb-5">
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
                    <TransitionInview>
                        <div className="w-full bg-primary mt-10 sm:mt-12 mb-0 md:mb-16 md:mb-20 rounded-md py-8 md:py-40 px-16 md:py-20 md:px-20">
                            <img
                                className="w-9/12 mx-auto pl-32"
                                src={spacex_logo}
                                alt="Mars Rover"
                            />
                        </div>
                    </TransitionInview>
                    <TransitionInview>
                        <SpacexPatches />
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </Layout>
    );
}

export default Spacex;
