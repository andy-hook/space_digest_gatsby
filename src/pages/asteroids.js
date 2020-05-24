import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Asteroids from "../components/Asteroids";
import asteroid from "../images/asteroid.jpg";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Page__asteroids() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

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
                <div className="md:w-9/12 mx-auto text-center pt-24">
                    <h1 className="mb-3">Asteroids</h1>

                    <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                        NeoWs (Near Earth Object Web Service) is a web service
                        for near earth Asteroid information. With NeoWs we can
                        display Asteroids based on their closest approach date
                        to Earth.
                        <a
                            className="block text-black text-base md:text-2xl  pt-6 md:pt-10"
                            target="_blank"
                            href="https://cneos.jpl.nasa.gov/"
                        >
                            CNEOS - Center for Near Earth Object Studies
                        </a>
                    </h3>
                </div>
                {/* <img
                    className="w-full bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-32"
                    src={asteroid}
                    alt="Asteroid"
                /> */}
                <div
                    class=" w-full h-64 bg-fixed my-20"
                    style={{
                        backgroundImage: `url(${asteroid})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>

                <TransitionInview>
                    <Asteroids />
                </TransitionInview>
            </TransitionPageIn>
        </Layout>
    );
}

export default Page__asteroids;
