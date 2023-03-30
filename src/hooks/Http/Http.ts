import {useCallback, useEffect} from 'react';

function useHttp() {

    const request = useCallback((urn: string) => {
        // TODO: check expired
        //         // if (...)

        // here will be fetched

    }, []);

    return { request };
}