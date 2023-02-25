import React from "react";
import Layout from "../../hoc/Layout/Layout";
import Routing from "../Routing/Routing";
import NotificationProvider from "../Notification/NotificationProvider/NotificationProvider";

export default function MainContent() {
    return (
        <Layout>
            <NotificationProvider>
                <Routing />
            </NotificationProvider>
        </Layout>
    );
}