import React, { ReactElement, useState } from 'react';

import HandlerErrorComponent from '../../components/HandlerErrorComponent/HandlerErrorComponent';
import { KEY } from '../../constants/Constants';

type LayoutProps = { children: ReactElement };

export default function PrivateRoute(props: LayoutProps) {
    const [isAuthenticated] = useState(localStorage.getItem(KEY.TOKEN));

    return isAuthenticated ? props.children : <HandlerErrorComponent />;
}
