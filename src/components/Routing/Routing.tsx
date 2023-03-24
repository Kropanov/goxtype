import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../containers/Main/Main";
import Practice from "../../containers/Practice/Practice";
import UserProfile from "../../containers/UserProfile/UserProfile";
import PracticePacks from "../../containers/PracticePacks/PracticePacks";
import PrivateRoute from '../../hoc/PrivateRoute/PrivateRoute';
import Logout from '../Logout/Logout';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/practice-packs" element={<PracticePacks />}/>
            <Route path="/practice" element={<Practice />}/>
            <Route path="/profile" element={
                <PrivateRoute>
                    <UserProfile />
                </PrivateRoute>
            }/>
            <Route path="/Logout" element={
                <PrivateRoute>
                    <Logout />
                </PrivateRoute>
            }/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    );
}