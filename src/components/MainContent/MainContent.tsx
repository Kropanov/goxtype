import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AuthorizationForm from "../Forms/AuthorizationForm/AuthorizationForm";
import {AUTH, REG} from "../../constants/Constants";

export default function MainContent() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="authorization" element={<AuthorizationForm tab={AUTH} />}/>
                <Route path="registration" element={<AuthorizationForm tab={REG} />}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </>
    );
}