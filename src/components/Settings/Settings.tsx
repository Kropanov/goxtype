import { Grid } from '@mui/material';
import React from 'react';

import AccountSettings from './Account/AccountSettings/AccountSettings';
import CrucialSection from './Account/CrucialSection/CrucialSection';
import ProfileSettings from './Profile/ProfileSettings/ProfileSettings';
import ThemeSettings from './Profile/ThemeSettings/ThemeSettings';

export default function Settings() {
    return (
        <Grid container spacing={5}>
            <AccountSettings />
            <ThemeSettings />
            <ProfileSettings />
            <CrucialSection />
        </Grid>
    );
}
