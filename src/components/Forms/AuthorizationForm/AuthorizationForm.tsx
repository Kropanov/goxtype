import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import TabPanel from "../../Common/TabPanel/TabPanel";

type AuthorizationProps = {
    tab: number;
    authModalClose: () => void;
    handleSuccessAuth: () => void;
};

export default function AuthorizationForm(props: AuthorizationProps) {
    const {tab, authModalClose, handleSuccessAuth} = props;
    const [value, setValue] = React.useState(tab);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Log in" />
                    <Tab label="Sign up" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LogIn
                    AuthModalClose={authModalClose}
                    handleSuccessAuth={handleSuccessAuth}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp
                    AuthModalClose={authModalClose}
                    handleSuccessAuth={handleSuccessAuth}
                />
            </TabPanel>
        </>
    );
}