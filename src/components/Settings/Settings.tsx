import React from 'react';
import {Grid} from "@mui/material";
import ThemeSettings from "./Profile/ThemeSettings/ThemeSettings";
import ProfileSettings from "./Profile/ProfileSettings/ProfileSettings";
import CrucialSection from "./Account/CrucialSection/CrucialSection";
import AccountSettings from "./Account/AccountSettings/AccountSettings";

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