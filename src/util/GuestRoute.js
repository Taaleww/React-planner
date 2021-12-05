import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet, Route } from 'react-router-dom';

function GuestRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);   // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return user ? <Navigate to="/" /> : <Outlet />;

    // return (
    //     <Route
    //         {...rest}
    //         render={(props) => 
    //             user ? <Redirect to="/"/> : <Component {...props}/> }
    //     />
    // )

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Navigate to="/" /> : <Component {...props} />}
        />
    );
}

export default GuestRoute;