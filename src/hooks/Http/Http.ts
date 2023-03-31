import {useContext, useState} from 'react';
import {NOTIFICATION, TOKEN_KEY} from "../../constants/Constants";
import {NotificationContext} from "../../components/Notification/NotificationContext/NotificationContext";

export default function useHttp() {

    const [loading, setLoading]  = useState(false);
    const {dispatch} = useContext(NotificationContext);

    // FIXME: Function should be done with useCallback
    const request = async (url: string, options?: RequestInit | undefined) => {
        try {
            setLoading(true);
            // TODO: check expired of token
            insertHeaders(options);

            const response = await fetch(url, options);
            const result = await response.json();

            setLoading(false);

            if (response.ok) {
                return result;
            } else {
                dispatch({type: NOTIFICATION.ERROR, payload: result.message});
                return;
            }
        } catch (e){
            console.log((e as Error).message);
        }
    };

    return { loading, request };
}

function insertHeaders(options?: RequestInit | undefined) {
    if (!options) {
        return;
    }

    const headers: HeadersInit | undefined = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
    };

    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    options.headers = headers;

    return options;
}
