import {useRouter} from "../Router/Router";
import React from "react";

export default function useSignUp(AuthModalClose: () => void) {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('This thing was submitted!');
        AuthModalClose();
        router.push('/');
    };

    return {
        showPassword,
        showConfirmPassword,
        handleClickShowPassword,
        handleClickShowConfirmPassword,
        handleMouseDownPassword,
        handleSubmit
    };
}