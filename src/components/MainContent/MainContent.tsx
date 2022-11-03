import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../../containers/Main/Main";

export default function MainContent() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </>
    );
}