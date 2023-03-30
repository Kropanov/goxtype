import {useRouter} from "../Router/Router";
import React, {useContext, useState} from "react";
import { NOTIFICATION, TOKEN_KEY } from "../../constants/Constants";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { AuthorizationContext } from "../../components/Authorization/AuthorizationContext/AuthorizationContext";

export default function useLogIn(AuthModalClose: () => void) {
    const router = useRouter();
    const {dispatch} = useContext(NotificationContext);
    const {setIsAuthenticated} = useContext(AuthorizationContext);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [checked, setChecked] = React.useState(true);
    const [emailTextFieldValue, setEmailTextFieldValue] = useState("");
    const [passwordTextFieldValue, setPasswordTextFieldValue] = useState("");
    const [loading, setLoading] = React.useState(false);

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

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // TODO: refactor this
    const handleSubmitLoginForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (passwordTextFieldValue === "") {
            dispatch({type: NOTIFICATION.EMPTY_FIELDS});
            return;
        }

        setLoading(true);

        const response = await fetch("/login", { 
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailTextFieldValue,
                password: passwordTextFieldValue
            })
        } );
        
        setLoading(false);
        
        // FIXME: This shouldn work with the error nowq
        switch (response.status) {
            case 201:
                AuthModalClose();
                dispatch({type: NOTIFICATION.SUCCESS_AUTHORIZATION});
                break;
            case 401:
                dispatch({type: NOTIFICATION.INVALID_EMAIL_PASSWORD});
                return;
            default:
                dispatch({type: NOTIFICATION.ERROR});
                break;
        }
        
        const result =  await response.json();
        localStorage.setItem(TOKEN_KEY, result.token);
        setIsAuthenticated(true);
    };

    const handleClickShowForgotPassword = (e: { preventDefault: () => void; }) => {
        router.push('/auth/forgot_password');
        AuthModalClose();
        e.preventDefault();
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