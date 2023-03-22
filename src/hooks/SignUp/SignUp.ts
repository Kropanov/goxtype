import React, {useContext, useState} from "react";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { ERROR, FAIL, NOTIFICATION, SUCCESS } from "../../constants/Constants";

export default function useSignUp(AuthModalClose: () => void) {
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

    // TODO: refactor this function
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
        } ).then(res => res.json());

        // TODO: Please create special hook for setting notification state
        switch (response.status) {
            case SUCCESS:
                // TODO: maybe we should add this in future
                // handleSuccessAuth();
                AuthModalClose();
                dispatch({type: NOTIFICATION.SUCCESS_REGISTRATION});            
                break;
            case FAIL:
                dispatch({type: NOTIFICATION.INVALID_EMAIL_PASSWORD});            
                break;
            case ERROR:
                dispatch({type: NOTIFICATION.ERROR});            
                break;
            default:
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