import {useRouter} from "../Router/Router";
import React, {useContext, useState} from "react";
import {API_ROUTES, NOTIFICATION, KEY} from "../../constants/Constants";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { AuthorizationContext } from "../../components/Authorization/AuthorizationContext/AuthorizationContext";
import useHttp from "../Http/Http";
import useUserData from "../UserData/UserData";

export default function useLogIn() {
    const {LoadUserDataToClient} = useUserData();
    const {loading, request} = useHttp();
    const router = useRouter();
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
        localStorage.setItem(KEY.TOKEN, result.token);

        await LoadUserDataToClient(result.token);

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