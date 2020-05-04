
import React from "react";
import { Link } from "gatsby"

function Footer() {
    return (
        <footer className="container mx-auto h-24 bg-teal-300 flex flex-col md:flex-row justify-between items-center py-4 px-10 mb-8">
            <Link  rel="noopener noreferrer" className="block text-2xl underline" to="/about">
                About
            </Link>
            <div className="block text-2xl leading-snug">
                <a  rel="noopener noreferrer" href="mailto:webmaster@example.com">hi@spacedigest.live</a>
            </div>
        </footer>
    );
}

export default Footer;

