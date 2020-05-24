import React from "react";
import { Router } from "@reach/router";
import Launch from "./launch";

const App = () => {
    return (
        <Router>
            <Launch path="/app/launch/:id" />
        </Router>
    );
};
export default App;
