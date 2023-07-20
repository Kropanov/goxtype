import React, {useContext, useState} from "react";
import { AuthorizationContext } from "../../components/Authorization/AuthorizationContext/AuthorizationContext";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import {API_ROUTES, NOTIFICATION, KEY} from "../../constants/Constants";
import useHttp from "../Http/Http";

export default function useSignUp() {
    const {dispatch} = useContext(NotificationContext);
    const {loading, request} = useHttp();
    const {setIsAuthenticated} = useContext(AuthorizationContext);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [emailTextFieldValue, setEmailTextFieldValue] = useState("");
    const [passwordTextFieldValue, setPasswordTextFieldValue] = useState("");
    const [confirmPasswordTextFieldValue, setConfirmPasswordTextFieldValue] = useState("");


    const handleChangeEmailValue = (value: string) => {
        setEmailTextFieldValue(value);
    };

    const handleChangePasswordValue = (value: string) => {
        setPasswordTextFieldValue(value);
    };

    const handleChangeConfirmPasswordValue = (value: string) => {
        setConfirmPasswordTextFieldValue(value);
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (emptyTextFields()) {
            dispatch({type: NOTIFICATION.EMPTY_FIELDS});            
            return;
        }

        if (passwordsDontMatch()) {
            dispatch({type: NOTIFICATION.FAIL_VALIDATION_PASSWORD});  
            return;
        }

        const options = {
            method: "POST",
            body: JSON.stringify({
                email: emailTextFieldValue,
                password: passwordTextFieldValue
            })
        };

        const result = await request(API_ROUTES.SIGN_UP, options);

        if (!result) {
            return;
        }

        dispatch({type: NOTIFICATION.SUCCESS_REGISTRATION});
        localStorage.setItem(KEY.TOKEN, result.token);
        setIsAuthenticated(true);
    };

    const emptyTextFields = () => {
        return passwordTextFieldValue === "" || confirmPasswordTextFieldValue === "";
    };

    const passwordsDontMatch = () => {
        return  passwordTextFieldValue !== confirmPasswordTextFieldValue;
    };

    return {
        loading,
        handleSubmit,
        showPassword,
        showConfirmPassword,
        handleClickShowPassword,
        handleClickShowConfirmPassword,
        emailTextFieldValue,
        passwordTextFieldValue,
        confirmPasswordTextFieldValue,
        handleMouseDownPassword,
        handleChangeEmailValue,
        handleChangePasswordValue,
        handleChangeConfirmPasswordValue
    };
}