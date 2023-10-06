import React, {useEffect, useState} from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import {createTheme} from "@mui/material/styles";
import {KEY} from "../../constants/Constants";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function useTheme() {
    const [mode, setMode] = useState<'light' | 'dark'>(
        (localStorage.getItem(KEY.THEME) as 'light' | 'dark') || 'dark');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    useEffect(() => {
        const favicon = document.getElementById('favicon') as HTMLLinkElement;
        if (prefersDarkMode) {
            favicon.href = "favicon.ico";
        }  else {
            favicon.href = "favicon-black.ico";
        }
    }, [prefersDarkMode]);

    useEffect(() => {
        localStorage.setItem(KEY.THEME, theme.palette.mode);
    }, [theme]);

    return {
        colorMode,
        theme
    };
}