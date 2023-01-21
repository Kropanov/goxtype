import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../containers/Main/Main";
import Practice from "../../containers/Practice/Practice";
import UserProfile from "../../containers/UserProfile/UserProfile";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/practice" element={<Practice />}/>
            <Route path="/profile" element={<UserProfile />}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    );
}