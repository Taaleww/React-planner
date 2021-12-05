import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate , Route } from 'react-router-dom';

function GuestRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);   // determine if authorized, from context or however you're doing it

    // If not, return an component 
    // If authorized, return component that will navigate to home page
    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Navigate  to="/" /> : <Component {...props} />}
        />
    );
}

export default GuestRoute;