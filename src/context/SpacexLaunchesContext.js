import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const SpacexLaunchesContext = createContext();

export function SpacexLaunchesProvider(props) {
    const res = useFetch("/api/spacex/launch", {});

    return (
        <SpacexLaunchesContext.Provider value={res}>
            {props.children}
        </SpacexLaunchesContext.Provider>
    );
}
