import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Authorization from "../Forms/Authorization/Authorization";

export default function MainContent() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="authorization" element={<Authorization />}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </>
    );
}