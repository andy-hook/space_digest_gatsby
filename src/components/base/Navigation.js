import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
    return (
        <header className="w-full fixed bg-gray-100 md:bg-transparent z-10">
            <div className="w-10/12 md:container mx-auto flex justify-between py-4 md:pt-6 ">
                <Link className="text-primary" to="/">
                    <img
                        className="w-8 md:w-12 mr-8 md:mr-4"
                        src={logo}
                        alt="nasa-logo"
                    />
                </Link>

                <nav className="w-3/4 md:w-1/4 flex justify-between">
                    <Link
                        className="inline-block text-primary text-xl md:text-2xl leading-normal hover:text-black"
                        to="nasa"
                    >
                        Nasa
                    </Link>
                    <Link
                        className="inline-block text-primary text-xl md:text-2xl  leading-normal hover:text-black"
                        to="spacex"
                    >
                        SpaceX
                    </Link>
                    <Link
                        className="inline-block text-primary text-xl md:text-2xl leading-normal hover:text-black"
                        to="/photos"
                    >
                        Photos
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
