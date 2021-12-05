import React,{ useContext } from "react";
import { Route, Redirect  } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute ({ component: Component, ...rest }){
    const { user } = useContext(AuthContext) // determine if authorized, from context or however you're doing it
    
    // console.log("user",user);
    // return(
    //     <div>
    //         Swaddee
    //     </div>
    // );
    // If authorized, return an component 
    // If not, return component that will navigate to home page
    return(
        <Route
            {...rest}
            render={(props) => 
                user ? <Component {...props}/>  : <></>}
        />
    )
}

export default AuthRoute;