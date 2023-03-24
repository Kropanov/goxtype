import React from "react";
import Layout from "../../hoc/Layout/Layout";
import Routing from "../Routing/Routing";
import NotificationProvider from "../Notification/NotificationProvider/NotificationProvider";
import AuthorizationProvider from "../Authorization/AuthorizationProvider/AuthorizationProvider";

export default function MainContent() {
    return (
        <NotificationProvider>
            <AuthorizationProvider>
                <Layout>
                    <Routing />
                </Layout>
            </AuthorizationProvider>
        </NotificationProvider>
    );
}