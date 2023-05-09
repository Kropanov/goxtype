import {NOTIFICATION} from "../../../constants/Constants";

// eslint-disable-next-line
function reducer(state: any, action: any) {
    switch (action.type) {
        case NOTIFICATION.ERROR:
            return {
                open: true,
                severity: "error",
                message: action.payload
            };
        case NOTIFICATION.SUCCESS_UPDATE_PASSWORD:
            return {
                open: true,
                severity: "success",
                message: "Your password has been updated"
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
        case NOTIFICATION.SUCCESS_UPDATE_USERNAME:
            return {
                open: true,
                severity: "success",
                message: "User name was updated!"
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
