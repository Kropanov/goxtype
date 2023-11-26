import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import TabPanel from '../../Common/TabPanel/TabPanel';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';

type AuthorizationProps = {
    tab: number;
};

export default function AuthorizationForm(props: AuthorizationProps) {
    const { tab } = props;
    const [value, setValue] = React.useState(tab);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Log in" />
                    <Tab label="Sign up" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LogIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp />
            </TabPanel>
        </>
    );
}
