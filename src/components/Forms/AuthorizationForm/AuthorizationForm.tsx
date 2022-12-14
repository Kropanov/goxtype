import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3, pr: 3, pl: 3, pb: 0 }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

type AuthorizationProps = {
    tab: number;
    AuthModalClose: () => void;
    handleSuccessAuth: () => void;
};

export default function AuthorizationForm(props: AuthorizationProps) {
    const {tab, AuthModalClose, handleSuccessAuth} = props;
    const [value, setValue] = React.useState(tab);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Log in" {...a11yProps(0)} />
                    <Tab label="Sign up" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LogIn
                    AuthModalClose={AuthModalClose}
                    handleSuccessAuth={handleSuccessAuth}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp
                    AuthModalClose={AuthModalClose}
                    // handleSuccessAuth={handleSuccessAuth}
                />
            </TabPanel>
        </>
    );
}