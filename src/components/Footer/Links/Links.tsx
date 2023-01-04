import React from "react";
import {Grid, List, ListItemButton} from "@mui/material";
import CompanyLogo from "../../Common/CompanyLogo/CompanyLogo";

export default function Links() {
    // ToDo: this isn't stunning code, so we need more code refactoring!
    return (
        <Grid
            container
            sx={{ pt: 5, pb: 5}}
            justifyContent={{sm: 'center', xs: 'center'}}
        >
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <CompanyLogo />
            </Grid>
            <Grid item lg={2} md sm='auto' xs='auto'>
                <List>
                    <ListItemButton>WEEBLY THEMES</ListItemButton>
                    <ListItemButton>PRE-SALE FAQS</ListItemButton>
                    <ListItemButton>SUBMIT A TICKET</ListItemButton>
                </List>
            </Grid>
            <Grid item lg={2} md sm='auto' xs='auto'>
                <List>
                    <ListItemButton>SERVICES</ListItemButton>
                    <ListItemButton>THEME TWEAK</ListItemButton>
                </List>
            </Grid>
            <Grid item lg={2} md sm='auto' xs='auto'>
                <List>
                    <ListItemButton>SHOWCASE</ListItemButton>
                    <ListItemButton>WIDGETKIT</ListItemButton>
                    <ListItemButton>SUPPORT</ListItemButton>
                </List>
            </Grid>
            <Grid item lg={2} md sm='auto' xs='auto'>
                <List>
                    <ListItemButton>ABOUT US</ListItemButton>
                    <ListItemButton>CONTACT US</ListItemButton>
                    <ListItemButton>AFFILIATES</ListItemButton>
                    <ListItemButton>RESOURCES</ListItemButton>
                </List>
            </Grid>
        </Grid>
    );
}