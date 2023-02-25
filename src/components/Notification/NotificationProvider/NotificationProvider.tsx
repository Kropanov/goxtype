import React, {useMemo, useState} from 'react';
import { NotificationContext } from './NotificationContext';
import Notification from "../Notification";
import {Severity} from "../../../types/Types";

type NotificationProviderProps = {
    children: React.ReactNode
};

type NotificationStateProps = {
    severity: Severity;
    message: string;
    open: boolean;
};

function NotificationProvider(props: NotificationProviderProps) {
    const [notificationState, setNotificationState] = useState<NotificationStateProps>({
        severity: "success",
        message: "!",
        open: false
    });
    const value = useMemo(() => ({notificationState, setNotificationState}), [notificationState]);
    return (
        <NotificationContext.Provider value={value}>
            {props.children}
            <Notification />
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;