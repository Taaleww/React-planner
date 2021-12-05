import { useContext } from "react";
import { Route, Navigate  } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute ({ component: Component, ...rest }){
    const { user } = useContext(AuthContext) // determine if authorized, from context or however you're doing it

    // If authorized, return an component 
    // If not, return component that will navigate to home page
    return(
        <Route
            {...rest}
            render={(props) => 
                user ? <Component {...props}/> : <Navigate  to="/"/> }
        />
    )
}

export default AuthRoute;