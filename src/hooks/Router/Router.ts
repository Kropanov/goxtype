import { useMemo } from "react";
import {
    useParams,
    useLocation,
    useNavigate,
} from "react-router-dom";

export function useRouter() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return useMemo(() => {
        return {
            push: navigate,
            pathname: location.pathname,
            query: {
                ...params,
            },
            location,
        };
    }, [params, location, navigate]);
}