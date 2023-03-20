import React, {useMemo, useState} from 'react';
import { NotificationContext } from '../NotificationContext/NotificationContext';
import Notification from "../Notification";

type NotificationProviderProps = {
    children: React.ReactNode
};

function NotificationProvider(props: NotificationProviderProps) {

    const initialState = {
        severity: "success",
        message: "",
        open: false
    };

    const [state, setState] = useState(initialState);

    const value = useMemo(() => ({state, setState}), [state]);
    return (
        <NotificationContext.Provider value={value}>
            {props.children}
            <Notification />
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;