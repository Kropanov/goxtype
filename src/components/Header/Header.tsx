import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {SITE_NAME, PAGES, TOKEN_KEY} from "../../constants/Constants";
import MediaQuery from 'react-responsive';
import Logo from "../Common/Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";
import AuthModal from "../Modals/AuthModal/AuthModal";
import {Link, NavLink} from "react-router-dom";
import { AuthorizationContext } from '../Authorization/AuthorizationContext/AuthorizationContext';

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const {isAuthenticated} = useContext(AuthorizationContext);
    const [authorizationSuccess, setAuthorizationSuccess] = useState<boolean>(localStorage.getItem(TOKEN_KEY) ? true : false);

    useEffect(() => {
        setAuthorizationSuccess(isAuthenticated);
    }, [isAuthenticated]);
    

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    // FIXME: we don't use handleSuccessAuth, need to remove 
    const AuthProps = {handleSuccessAuth: () => console.log("Magica is now connected")};

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MediaQuery minWidth={900}>
                        <Logo />
                    </MediaQuery>

                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="p"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {SITE_NAME}
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {PAGES.map((page, index) => (
                                <NavLink key={index} to={`${page.uri}`}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            {page.name[0].toUpperCase() + page.name.slice(1)}
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    <MediaQuery maxWidth={899}>
                        <Logo />
                    </MediaQuery>
                        <Typography
                            variant="h5"
                            noWrap
                            component="h5"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to="/">
                                {SITE_NAME}
                            </Link>
                        </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page, index) => (
                            <Button
                                key={index}
                                to={`${page.uri}`}
                                component={NavLink}
                                color="inherit"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'display' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    { authorizationSuccess
                        ?  <UserMenu/>
                        :  <AuthModal {...AuthProps} />
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;