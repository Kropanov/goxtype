import {useRouter} from "../Router/Router";
import React, {useContext, useState} from "react";
import {API_ROUTES, IMAGE_KEY, NOTIFICATION, TOKEN_KEY} from "../../constants/Constants";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { AuthorizationContext } from "../../components/Authorization/AuthorizationContext/AuthorizationContext";
import useHttp from "../Http/Http";
import {parseToken} from "../../func";

export default function useLogIn() {
    const router = useRouter();
    const {loading, request} = useHttp();
    const {dispatch} = useContext(NotificationContext);
    const {setIsAuthenticated} = useContext(AuthorizationContext);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [checked, setChecked] = React.useState(true);
    const [emailTextFieldValue, setEmailTextFieldValue] = useState("");
    const [passwordTextFieldValue, setPasswordTextFieldValue] = useState("");

    const handleChangeEmailValue = (value: string) => {
        setEmailTextFieldValue(value);
    };

    const handleChangePasswordValue = (value: string) => {
        setPasswordTextFieldValue(value);
    };

    const handleChangeCheckBoxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleClickShowForgotPassword = (e: { preventDefault: () => void; }) => {
        router.push('/auth/forgot_password');
        e.preventDefault();
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmitLoginForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (emptyTextField()) {
            dispatch({type: NOTIFICATION.EMPTY_FIELDS});
            return;
        }

        const options = {
            method: "POST",
            body: JSON.stringify({
                email: emailTextFieldValue,
                password: passwordTextFieldValue
            })
        };

        const result = await request(API_ROUTES.LOGIN, options);

        if (!result) {
            return;
        }

        dispatch({type: NOTIFICATION.SUCCESS_AUTHORIZATION});
        localStorage.setItem(TOKEN_KEY, result.token);

        // TODO: move that to another file
        // ------------
        const sameOptions = { method: "GET" };
        const payload = parseToken(result.token);
        const user = await request(API_ROUTES.USERS + payload.id, sameOptions);

        localStorage.setItem(IMAGE_KEY, user.data.image);
        localStorage.setItem("userName", user.data.name);
        // -------------

        setIsAuthenticated(true);
    };

    const emptyTextField = () => {
        return passwordTextFieldValue === "";
    };

    return {
        checked,
        loading,
        showPassword,
        emailTextFieldValue,
        passwordTextFieldValue,
        handleChangeCheckBoxValue,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleSubmitLoginForm,
        handleClickShowForgotPassword,
        handleChangeEmailValue,
        handleChangePasswordValue
    };
}