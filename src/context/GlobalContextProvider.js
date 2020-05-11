import React from "react";
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

import useFetch from "../hooks/useFetch";

// const res = useFetch("https://api.nasa.gov/mars-photos/api/v1", {});

const initialState = {};

function reducer(action, reducer) {
    switch (action.type) {
        case value:
            break;

        default:
            throw new Error("Bad action type");
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default GlobalContextProvider;
