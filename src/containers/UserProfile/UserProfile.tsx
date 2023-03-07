import React, {useContext, useEffect, useState} from "react";
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
import {NotificationContext} from "../../components/Notification/NotificationContext/NotificationContext";
import {SHOW_NOTIFICATION} from "../../constants/Constants";
import {scrollPageUp} from "../../func";


export default function UserProfile() {

    const [value, setValue] = useState(0);
    const {dispatch} = useContext(NotificationContext);

    useEffect(() => {
        scrollPageUp();
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    // ToDo: For testing api. Don't forget this
    // React.useEffect(() => {
    //     try {
    //         fetch("/user")
    //             .then((res) => res.json())
    //             .then((data) => console.log(data.message));
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, []);

    return (
        <Container>
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
                            // ToDo: only for testing, remove this piece of code after that
                            onClick={() => dispatch({type: SHOW_NOTIFICATION, payload: {
                                severity: "info",
                                message: "This is your avatar, Dear User!",
                            }}) }
                            sx={{
                                width: {lg: 296, md: 216, sm: 165, xs: 120},
                                height: {lg: 296, md: 216, sm: 165, xs: 120},
                                mb: 2,
                                mt: 3
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="h5"
                            sx={{
                                mr: 2,
                                display: {  xs: 'flex' },
                                fontWeight: 700,
                                margin: 'auto',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            User Name
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Box sx={{ width: '100%', mb: 3, mt: {sm: 3, xs: 0} }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Review" />
                                <Tab label="Library" />
                                <Tab label="Settings" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Review
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Library
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Settings
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}