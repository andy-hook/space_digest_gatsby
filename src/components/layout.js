import PropTypes from "prop-types";
import React from "react";
import Navigation from "./base/navigation";
import Footer from "./base/footer";

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
