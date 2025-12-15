import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);


    const location = useLocation();

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>


};

export default PrivateRoute;