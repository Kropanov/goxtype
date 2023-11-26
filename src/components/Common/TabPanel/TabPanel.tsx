import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
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
