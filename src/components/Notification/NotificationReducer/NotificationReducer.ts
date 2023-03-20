import {NotificationState} from "../../Types/Types";
import {HIDE_NOTIFICATION, SHOW_NOTIFICATION} from "../../../constants/Constants";

// FIXME: it's should be done with the useState hook
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