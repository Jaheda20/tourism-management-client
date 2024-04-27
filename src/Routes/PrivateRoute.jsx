import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";



const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    
    

    if(loading){
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(!user){
        <Navigate to='/signin' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;