import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="container mx-auto pt-12 h-screen">
                <h1 className="md:w-1/3 pt-32">
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
