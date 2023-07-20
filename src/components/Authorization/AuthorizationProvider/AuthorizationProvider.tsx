import React, {useMemo, useState} from 'react';
import { KEY } from '../../../constants/Constants';
import { AuthorizationContext } from '../AuthorizationContext/AuthorizationContext';

type AuthorizationProviderProps = {
    children: React.ReactNode
};

function AuthorizationProvider(props: AuthorizationProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem(KEY.TOKEN));

    const value = useMemo(() => ({isAuthenticated, setIsAuthenticated}), [isAuthenticated]);

    return (
        <AuthorizationContext.Provider value={value}>
            {props.children}
        </AuthorizationContext.Provider>
    );
}

export default AuthorizationProvider;