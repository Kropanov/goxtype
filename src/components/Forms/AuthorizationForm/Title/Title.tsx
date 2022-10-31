import React from 'react';
import Box from "@mui/material/Box";
import Logo from "../../../Common/Logo/Logo";
import Typography from "@mui/material/Typography";
import {SITE_NAME} from "../../../../constants/Constants";

type TitleProps = {
    message: string,
    stage: string,
};

export default function Title(props: TitleProps) {
    const {message, stage} = props;

    return (
        <>
            <Box
                sx={{
                    mb: 3,
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Logo authForm={true} width={40} height={40} />
                <Typography
                    variant="h6"
                    noWrap
                    component="h1"
                    sx={{
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontSize: '2rem',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {SITE_NAME}
                </Typography>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="h2"
                sx={{
                    display: { md: 'flex' },
                    fontFamily: 'monospace',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                {stage}
            </Typography>
            <Typography
                variant="subtitle2"
                noWrap
                component="p"
                sx={{
                    mb: 3,
                    display: { md: 'flex' },
                    fontFamily: 'monospace',
                    justifyContent: 'center',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                {message}
            </Typography>
        </>
    );
}