import PropTypes from "prop-types";
import React from "react";
import Navigation from "./base/Navigation";
import Footer from "./base/Footer";

function Layout({ children }) {
    return (
        <>
            <Navigation />

            <main>{children}</main>

            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
