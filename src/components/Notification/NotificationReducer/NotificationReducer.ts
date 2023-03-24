import {NOTIFICATION} from "../../../constants/Constants";

// FIXME: refactor this 
// eslint-disable-next-line
function reducer(state: any, action: any) {
    switch (action.type) {
        case NOTIFICATION.PROFILE_TEST:
            return {
                open: true,
                severity: "info",
                message: "It's your pofile avatar, Dear User!"
            };
        case NOTIFICATION.SUCCESS_AUTHORIZATION: 
            return {
                open: true,
                severity: "success",
                message: "You have been successfully authorizated!"
            };
        case NOTIFICATION.INVALID_EMAIL_PASSWORD:
            return {
                open: true,
                severity: "warning",
                message: "Invalid email or/and password!"
            };
        case NOTIFICATION.EMAIL_ALREADY_EXIST:
            return {
                open: true,
                severity: "warning",
                message: "User email already exists!"
            };
        case NOTIFICATION.ERROR:
            return {
                open: true,
                severity: "error",
                message: "Ops! Something went wrong!"
            };
        case NOTIFICATION.FAIL_VALIDATION_PASSWORD:
            return {
                open: true,
                severity: "warning",
                message: "Passwords don't match. Please, write again!"
            };
        case NOTIFICATION.SUCCESS_REGISTRATION:
            return {
                open: true,
                severity: "success",
                message: "Registration was successful!"
            };
        case NOTIFICATION.EMPTY_FIELDS:
            return {
                open: true,
                severity: "warning",
                message: "Please, fill the required fields!"
            };
        case NOTIFICATION.HIDE:
            return {
                ...state,
                open: false
            };
        default:
            return {
                open: true,
                severity: "error",
                message: "Ops, something went wrong! Please sorry!"
            };
    }
}

export default reducer;
