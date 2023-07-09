import React, {useState, useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router} from 'react-router-dom';
import MainContent from "./components/MainContent/MainContent";

// TODO: Move color logic to other file (create another hook)
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    // TODO: Need to think about working logic with prefers mode
    // mode: prefersDarkMode ? 'dark' : 'light',
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

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Router>
                    <CssBaseline />
                    <MainContent />
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
