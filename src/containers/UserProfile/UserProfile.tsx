import { Avatar, Box, Container, Grid, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import TabPanel from '../../components/Common/TabPanel/TabPanel';
import Settings from '../../components/Settings/Settings';
import { KEY } from '../../constants/Constants';
import { scrollPageUp } from '../../func';

export default function UserProfile() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        scrollPageUp();
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ minHeight: '900px' }}>
            <Grid container>
                <Grid item sm={4} xs={12}>
                    <Grid
                        container
                        justifyContent={{ sm: 'center', xs: 'space-around' }}
                        alignItems="center"
                        direction={{ xs: 'column' }}
                    >
                        <Avatar
                            alt="Avatar"
                            src={localStorage.getItem(KEY.IMAGE) ?? undefined}
                            sx={{
                                width: { lg: 296, md: 216, sm: 165, xs: 120 },
                                height: { lg: 296, md: 216, sm: 165, xs: 120 },
                                mb: 1,
                                mt: 3,
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="h5"
                            sx={{
                                display: { xs: 'flex' },
                                fontWeight: 700,
                                margin: 'auto',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {localStorage.getItem(KEY.NAME) ?? 'Player-1583923'}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Box sx={{ width: '100%', mb: 3, mt: { sm: 3, xs: 0 } }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Library" />
                                <Tab label="Settings" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Library will be added soon!
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Settings />
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
