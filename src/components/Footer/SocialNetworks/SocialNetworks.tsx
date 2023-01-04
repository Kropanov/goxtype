import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";

export default function SocialNetworks() {
    return (
        <Grid sx={{ pt: 4, pb: 4}} container justifyContent="center">
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ pt: 1, pb: 1 }}>
                    <SocialIcons />
                </Box>
                <Typography>
                    ©Copyright. All rights reserved.
                </Typography>
            </Box>
        </Grid>
    );
}