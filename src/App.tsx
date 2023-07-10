import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router} from 'react-router-dom';
import MainContent from "./components/MainContent/MainContent";
import useTheme, {ColorModeContext} from "./hooks/Theme/Theme";

function App() {
    const {colorMode, theme} = useTheme();
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
