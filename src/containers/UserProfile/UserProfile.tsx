import React, {useState} from "react";
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


export default function UserProfile() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Grid container>
                <Grid item sm={4} xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random"
                            sx={{
                                width: {lg: 296, md: 196, sm: 165, xs: 120},
                                height: {lg: 296, md: 196, sm: 165, xs: 120},
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
                                margin: "auto",
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Iakov Pyzhov
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Box sx={{ width: '100%', mb: 3, mt: {sm: 3, xs: 0} }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}