import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

import { API_ROUTES, KEY } from '../../../../constants/Constants';
import { parseToken } from '../../../../func';
import useHttp from '../../../../hooks/Http/Http';
import { useRouter } from '../../../../hooks/Router/Router';

export default function CrucialSection() {
    const router = useRouter();
    const { request } = useHttp();

    const handleDeleteUserAccount = async () => {
        const token = localStorage.getItem(KEY.TOKEN);

        if (!token) {
            return;
        }

        const payload = parseToken(token);
        const options = { method: 'DELETE' };

        const result = await request(API_ROUTES.USERS + payload.id, options);

        if (!result) {
            return;
        }

        router.push('/logout');
    };

    return (
        <Grid item sm={4} xs={12}>
            <Grid container justifyContent={{ xs: 'space-around' }} alignItems="center" direction={{ xs: 'column' }}>
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
