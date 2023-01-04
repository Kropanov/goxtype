import React from 'react';
import Typography from "@mui/material/Typography";
import CompanyLogo from "../../../Common/CompanyLogo/CompanyLogo";

type TitleProps = {
    message: string,
    stage: string,
};

export default function Title(props: TitleProps) {
    const {message, stage} = props;

    return (
        <>
            <CompanyLogo />
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