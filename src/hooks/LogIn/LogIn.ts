import {useRouter} from "../Router/Router";
import React, {useContext, useState} from "react";
import { ERROR, FAIL, SUCCESS } from "../../constants/Constants";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";

export default function useLogIn(AuthModalClose: () => void, handleSuccessAuth: () => void) {
    const router = useRouter();
    const {setState} = useContext(NotificationContext);
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

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmitLoginForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
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
        } ).then(res => res.json());
        
        // TODO: Please create special hook for setting notification state
        switch (response.status) {
            case SUCCESS:
                handleSuccessAuth();
                AuthModalClose();
                setState({
                    open: true,
                    severity: "success",
                    message: "You have been successfully authorizated!"
                });
                break;
            case FAIL:
                setState({
                    open: true,
                    severity: "warning",
                    message: "Invalid email or/and password!"
                });
                break;
            case ERROR:
                setState({
                    open: true,
                    severity: "error",
                    message: response.message && "Something went wrong!"
                });
                break;
            default:
                break;
        }
    };

    const handleClickShowForgotPassword = (e: { preventDefault: () => void; }) => {
        router.push('/auth/forgot_password');
        AuthModalClose();
        e.preventDefault();
    };

    return {
        checked,
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