import React, { useReducer, useContext, createContext } from "react";
// import { SPACEX_CONTEXT } from "../types";

import Launches from "./SpacexLaunchesContext";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
    result: null,
    loading: true,
    error: null,
};

function reducer(state, action) {
    if (action.type === "LOADING") {
        return {
            result: null,
            loading: true,
            error: null,
        };
    }
    if (action.type === "RESPONSE_COMPLETE") {
        return {
            result: action.payload.response,
            loading: false,
            error: null,
        };
    }
    if (action.type === "ERROR") {
        return {
            result: null,
            loading: false,
            error: action.payload.error,
        };
    }
    return state;
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default GlobalContextProvider;
