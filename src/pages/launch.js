import React, { useContext } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useFetch from "../hooks/useFetch";
import Loader from "../components/base/Loader";
import VideoFeatured from "../components/base/VideoFeatured";
import Moment from "react-moment";
import TransitionPageIn from "../components/TransitionPageIn";

function Launch(props) {
    const res = useFetch("https://api.spacexdata.com/v3/launches", []);

    // console.log("Launches fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="mx-auto pt-20 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }

    const pageData = res.response
        .map((res) => res)
        .filter((res) => res.mission_name == props.location.pathname);

    console.log("location", props.location.pathname);
    console.log("Name", pageData.mission_name);
    console.log("PageData", pageData);

    // console.log(`/${pageData[0].mission_name}`.toLowerCase());

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
            <h1>Launch Page</h1>
        </Layout>
    );
}

export default Launch;
