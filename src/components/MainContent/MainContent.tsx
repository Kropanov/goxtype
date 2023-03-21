import React from "react";
import Layout from "../../hoc/Layout/Layout";
import Routing from "../Routing/Routing";
import NotificationProvider from "../Notification/NotificationProvider/NotificationProvider";

export default function MainContent() {
    return (
        <NotificationProvider>
            <Layout>
                <Routing />
            </Layout>
        </NotificationProvider>
    );
}