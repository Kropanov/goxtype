import React from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function TextContainer() {
    return (
        <Paper sx={{m: 3}} elevation={4}>
            <Typography sx={{p: 2}} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
        </Paper>
    );
}