import * as React from 'react';
import { Container, AppBar, MenuItem, Tooltip, Avatar, ListItemButton, Menu, ListItemIcon, Box, Toolbar, IconButton, Typography } from '@mui/material';
import { Search, Home, Storefront, Groups, NotificationsActive, ViewComfy, MapsUgc, DashboardCustomize } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ backgroundColor: '#fff' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar src="/assets/images/logo.png" />

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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ backgroundColor: '#f0f2f5', ml: 1, borderRadius: '25px', display: 'flex', alignItems: 'center' }}>
                            <Search sx={{ color: '#111', ml: 1 }} />
                            <input type="text" placeholder="Search Facebook" className="searchInput" />
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                <Home sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <Storefront sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <Groups sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <DashboardCustomize sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <ViewComfy sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <MapsUgc sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <NotificationsActive sx={{ fontSize: '30px' }} />
                            </ListItemIcon>
                        </ListItemButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Tobibur Rohman" src="/assets/images/users/tobibur.png" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
