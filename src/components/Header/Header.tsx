import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';

import { KEY, PAGES, SITE_NAME } from '../../constants/Constants';
import { AuthorizationContext } from '../Authorization/AuthorizationContext/AuthorizationContext';
import Logo from '../Common/Logo/Logo';
import AuthModal from '../Modals/AuthModal/AuthModal';
import UserMenu from '../UserMenu/UserMenu';

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { isAuthenticated } = useContext(AuthorizationContext);
    const [authorizationSuccess, setAuthorizationSuccess] = useState<boolean>(!!localStorage.getItem(KEY.TOKEN));

    useEffect(() => {
        setAuthorizationSuccess(isAuthenticated);
    }, [isAuthenticated]);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                                <NavLink key={index} to={`${page.urn}`}>
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
                        <Link to="/">{SITE_NAME}</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page, index) => (
                            <Button
                                key={index}
                                to={`${page.urn}`}
                                component={NavLink}
                                color="inherit"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'display' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {authorizationSuccess ? <UserMenu /> : <AuthModal />}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
