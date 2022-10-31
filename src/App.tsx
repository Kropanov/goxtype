import React, {useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router} from 'react-router-dom';
import MainContent from "./components/MainContent/MainContent";

function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    useEffect(() => {
        const favicon = document.getElementById('favicon') as HTMLLinkElement;
        if (prefersDarkMode) {
            favicon.href = "favicon.ico";
        }  else {
            favicon.href = "favicon-black.ico";
        }
    }, [prefersDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <MainContent />
            </Router>
        </ThemeProvider>
    );
}

export default App;
