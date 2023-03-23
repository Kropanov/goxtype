import React, {useContext, useState} from "react";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { NOTIFICATION } from "../../constants/Constants";

export default function useSignUp(AuthModalClose: () => void, handleSuccessAuth: () => void) {
    const {dispatch} = useContext(NotificationContext);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [emailTextFieldValue, setEmailTextFieldValue] = useState("");
    const [passwordTextFieldValue, setPasswordTextFieldValue] = useState("");
    const [confirmPasswordTextFieldValue, setConfirmPasswordTextFieldValue] = useState("");
    const [loading, setLoading] = React.useState(false);


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

        if (passwordTextFieldValue === "" || confirmPasswordTextFieldValue === "") {
            dispatch({type: NOTIFICATION.EMPTY_FIELDS});            
            return;
        }

        if (passwordTextFieldValue !== confirmPasswordTextFieldValue) {
            dispatch({type: NOTIFICATION.FAIL_VALIDATION_PASSWORD});  
            return;
        }

        setLoading(true);

        const response = await fetch("/signup", { 
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

        // const result =  await response.json();

        switch (response.status) {
            case 201:
                handleSuccessAuth();
                AuthModalClose();
                dispatch({type: NOTIFICATION.SUCCESS_REGISTRATION});            
                break;
            case 400:
                dispatch({type: NOTIFICATION.EMAIL_ALREADY_EXIST});          
                break;
            default:
                dispatch({type: NOTIFICATION.ERROR});            
                break;
        }
        
        setLoading(false);
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