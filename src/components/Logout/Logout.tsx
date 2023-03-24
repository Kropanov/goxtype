import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationContext } from '../Authorization/AuthorizationContext/AuthorizationContext';

export default function Logout() {
    const {setIsAuthenticated} = useContext(AuthorizationContext);

    useEffect(() => {
        return () => {
            localStorage.clear();
            setIsAuthenticated(false);
        };
    }, []);

    return (
        <Navigate to="/" />
    );
}