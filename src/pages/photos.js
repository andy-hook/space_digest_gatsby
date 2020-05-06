import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PhotoCollection from "../components/PhotoCollection";
import { useSpring, animated } from "react-spring";

function Page__photosPage() {
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

            <animated.div style={fade} className="mx-auto pt-24 mb-12">
                <div className="w-9/12 mx-auto text-center mb-12">
                    <h1 className="mb-3">Photo collection</h1>
                    <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                        NASA.gov brings you the latest images, videos and news
                        from America's space agency. Get the latest updates on
                        NASA missions, and learn about the quest to reveal the
                        unknown and benefit all humankind.
                    </h3>
                </div>

                {/* <img
                    className="container mx-auto mb-10 md:mb-16"
                    src={moonlanding}
                    alt="Moon Landing"
                /> */}
                <div className="container">
                    <div className="w-full mx-auto my-10">
                        <PhotoCollection />
                    </div>
                </div>
            </animated.div>
        </Layout>
    );
}

export default Page__photosPage;