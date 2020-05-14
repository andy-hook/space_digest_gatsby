import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="container mx-auto h-screen text-center">
                <h1 className="md:w-1/3 bg-primary mt-40 py-5 px-5 text-left">
                    Sorry, the page you are looking for is not here.
                </h1>

                <Link
                    className="block text-black text-base md:text-2xl underline"
                    to="/"
                >
                    Back
                </Link>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
