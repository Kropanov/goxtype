import React, { ReactElement, useState } from 'react';
import HandlerErrorComponent from '../../components/HandlerErrorComponent/HandlerErrorComponent';
import { TOKEN_KEY } from '../../constants/Constants';

type LayoutProps = { children: ReactElement; };

export default function PrivateRoute(props: LayoutProps) {

    const [isAuthenticated] = useState(localStorage.getItem(TOKEN_KEY));

    return isAuthenticated ? (
        props.children
    ) : (
        <HandlerErrorComponent />
    );
}
