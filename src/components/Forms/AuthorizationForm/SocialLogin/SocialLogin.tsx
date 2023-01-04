import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialIcons from "../../../Common/SocialIcons/SocialIcons";

export default function SocialLogin() {
    return (
        <>
            <Typography
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
                variant="subtitle2"
                gutterBottom component="div"
            >
                or connect with
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1,
                    mt: 1,
                }}
            >
                <SocialIcons />
            </Box>
        </>
    );
}