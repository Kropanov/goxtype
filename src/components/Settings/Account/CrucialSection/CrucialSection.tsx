import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import { useRouter } from '../../../../hooks/Router/Router';
import {API_ROUTES, TOKEN_KEY} from "../../../../constants/Constants";
import useHttp from "../../../../hooks/Http/Http";
import {parseToken} from "../../../../func";

export default function CrucialSection() {

    const router = useRouter();
    const {request} = useHttp();

    const handleDeleteUserAccount = async () => {

        const token = localStorage.getItem(TOKEN_KEY);

        if (!token) {
            return;
        }

        const payload = parseToken(token);
        const options = { method: "DELETE" };

        const result = await request(API_ROUTES.USERS + payload.id, options);

        if (!result) {
            return;
        }

        router.push("/logout");
    };

    return (
        <Grid item sm={4} xs={12}>
            <Grid
                container
                justifyContent={{xs: 'space-around'}}
                alignItems="center"
                direction={{xs: "column"}}
            >
                <Typography variant="h6" gutterBottom>
                    Dangerous zone
                </Typography>
                <Button onClick={handleDeleteUserAccount} variant="outlined" color="error">
                    Delete account
                </Button>
            </Grid>
        </Grid>
    );
}