import {useRouter} from "../Router/Router";
import React, {useState} from "react";
import { SUCCESS } from "../../constants/Constants";

export default function useLogIn(AuthModalClose: () => void, handleSuccessAuth: () => void) {
    const router = useRouter();
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

        console.log(response);
        
        if (response.status === SUCCESS) {
            handleSuccessAuth();
            AuthModalClose();
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