import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../../containers/Main/Main';
import Practice from '../../containers/Practice/Practice';
import PracticePacks from '../../containers/PracticePacks/PracticePacks';
import UserProfile from '../../containers/UserProfile/UserProfile';
import PrivateRoute from '../../hoc/PrivateRoute/PrivateRoute';
import HandlerErrorComponent from '../HandlerErrorComponent/HandlerErrorComponent';
import Logout from '../Logout/Logout';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/practice-packs" element={<PracticePacks />} />
            <Route path="/practice" element={<Practice />} />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <UserProfile />
                    </PrivateRoute>
                }
            />
            <Route
                path="/logout"
                element={
                    <PrivateRoute>
                        <Logout />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<HandlerErrorComponent />} />
        </Routes>
    );
}
