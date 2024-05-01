import React from 'react';

import Layout from '../../hoc/Layout/Layout';
import AuthorizationProvider from '../Authorization/AuthorizationProvider/AuthorizationProvider';
import NotificationProvider from '../Notification/NotificationProvider/NotificationProvider';
import Routing from '../Routing/Routing';

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
