import {useRouter} from "../Router/Router";
import React from "react";

export default function useLogIn() {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log('This thing was submitted!');
        router.push('/main');
        e.preventDefault();
    };

    const handleClickShowForgotPassword = (e: { preventDefault: () => void; }) => {
        router.push('/auth/forgot_password');
        e.preventDefault();
    };

    return {
        showPassword,
        checked,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleSubmit,
        handleClickShowForgotPassword
    };
}