import {useRouter} from "../Router/Router";
import React from "react";

export default function useLogIn() {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

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

    return {
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleSubmit
    };
}