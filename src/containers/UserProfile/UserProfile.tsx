import React, { useEffect, useState} from "react";
import {
    Container,
    Avatar,
    Grid,
    Tabs,
    Box,
    Tab
} from "@mui/material";
import TabPanel from "../../components/Common/TabPanel/TabPanel";
import Typography from "@mui/material/Typography";
import {scrollPageUp} from "../../func";
import Settings from "../../components/Settings/Settings";

export default function UserProfile() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        scrollPageUp();
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{minHeight: "900px"}}>
            <Grid container>
                <Grid item sm={4} xs={12}>
                    <Grid
                        container
                        justifyContent={{sm: "center", xs: 'space-around'}}
                        alignItems="center"
                        direction={{xs: "column"}}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random"
                            sx={{
                                width: {lg: 296, md: 216, sm: 165, xs: 120},
                                height: {lg: 296, md: 216, sm: 165, xs: 120},
                                mb: 1,
                                mt: 3
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="h5"
                            sx={{
                                display: {  xs: 'flex' },
                                fontWeight: 700,
                                margin: 'auto',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Brave Heart
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Box sx={{ width: '100%', mb: 3, mt: {sm: 3, xs: 0} }}>
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
