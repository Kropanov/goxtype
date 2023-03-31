import {useState} from 'react';
import {TOKEN_KEY} from "../../constants/Constants";

function useHttp() {

    const [loading, setLoading]  = useState(false);
    const [result, setResult]  = useState({});

    // FIXME: Function should be done with useCallback
    const request = async (url: string, options: RequestInit | undefined) => {
        setLoading(true);
        // TODO: check expired
        insertHeaders(options);

        const response = await fetch(url, options);
        const result = await response.json();

        setResult(result);
        setLoading(false);
    };

    return { loading, result };
}

function insertHeaders(options: RequestInit | undefined) {
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
