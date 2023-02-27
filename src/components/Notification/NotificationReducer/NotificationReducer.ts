import {NotificationState} from "../../../types/Types";
import {HIDE_NOTIFICATION, SHOW_NOTIFICATION} from "../../../constants/Constants";

// eslint-disable-next-line
function reducer(state: NotificationState, action: any) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                severity: action.payload.severity,
                message: action.payload.message,
                open: true
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                open: false
            };
        default:
            throw new Error();
    }
}

export default reducer;