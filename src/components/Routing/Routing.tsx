import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../containers/Main/Main";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    );
}