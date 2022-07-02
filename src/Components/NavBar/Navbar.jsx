import * as React from 'react';
import { Container, AppBar, MenuItem, Tooltip, Avatar, ListItemButton, Menu, ListItemIcon, Box, Toolbar, IconButton, Typography } from '@mui/material';
import { Search, Home, Storefront, Groups, NotificationsActive, ViewComfy, MapsUgc, DashboardCustomize } from '@mui/icons-material'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ backgroundColor: '#fff', boxShadow: 3, bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'), }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar src="/assets/images/logo.png" />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-around' }}>
                        <ListItemIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Home />
                        </ListItemIcon>
                        <ListItemIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Storefront />
                        </ListItemIcon>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, backgroundColor: '#f0f2f5', ml: 1, borderRadius: '25px', alignItems: 'center' }}>
                        <Search sx={{ color: '#111', ml: 1 }} />
                        <input type="text" placeholder="Search Facebook" className="searchInput" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Home sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Storefront sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Groups sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <DashboardCustomize sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <ViewComfy sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <MapsUgc sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton sx={{ borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <NotificationsActive sx={{ fontSize: '30px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </Box>
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
            </Container >
        </AppBar >
    );
};
export default Navbar;
