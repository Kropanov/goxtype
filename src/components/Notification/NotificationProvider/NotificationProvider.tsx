import React, {useMemo, useReducer} from 'react';
import { NotificationContext } from '../NotificationContext/NotificationContext';
import Notification from "../Notification";
import reducer from "../NotificationReducer/NotificationReducer";

type NotificationProviderProps = {
    children: React.ReactNode
};


function NotificationProvider(props: NotificationProviderProps) {

    const initialState = {
        severity: "success",
        message: "",
        open: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({state, dispatch}), [state]);
    return (
        <NotificationContext.Provider value={value}>
            {props.children}
            <Notification />
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;