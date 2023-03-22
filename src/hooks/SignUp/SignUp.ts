import React, {useContext, useState} from "react";
import { NotificationContext } from "../../components/Notification/NotificationContext/NotificationContext";
import { ERROR, FAIL, SUCCESS } from "../../constants/Constants";

export default function useSignUp(AuthModalClose: () => void) {
    const {setState} = useContext(NotificationContext);
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
        setLoading(true);

        if (passwordTextFieldValue === "" || confirmPasswordTextFieldValue === "") {
            setState({
                open: true,
                severity: "warning",
                message: "Please fill the all fields!"
            });
            return;
        }

        if (passwordTextFieldValue !== confirmPasswordTextFieldValue) {
            setState({
                open: true,
                severity: "warning",
                message: "Passwords don't match. Please, write again!"
            });
            return;
        }

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

        console.log(response);

        // TODO: Please create special hook for setting notification state
        switch (response.status) {
            case SUCCESS:
                // TODO: maybe we should add this in future
                // handleSuccessAuth();
                AuthModalClose();
                setState({
                    open: true,
                    severity: "success",
                    message: "Registration was successful!"
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