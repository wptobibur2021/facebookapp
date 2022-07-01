import React from 'react'
import { Grid, Box, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Group, Groups, MonitorHeart, HeartBroken, VideoCall, Flag, ChatBubble, Bloodtype, Store, CalendarMonth, QueryBuilder, Bookmark, Science } from '@mui/icons-material';
import './Leftsidebar.css'
const Leftsidebar = () => {
    return (
        <Grid item xs={2} sm={12} md={3} lg={3}>
            <Box className="leftSidebarArea">
                <Box sx={{ padding: "0px 10px" }}>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon>
                            <Avatar alt="Tobibur Rohman" src="/assets/images/users/tobibur.png" />
                        </ListItemIcon>
                        <ListItemText primary="Tobibur Rohman" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }} classname="leftSidebarIcon">
                            <Group sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Groups sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Store sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <QueryBuilder sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Memories" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Bookmark sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Saved" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Bloodtype sx={{ fontSize: '25px', color: 'red' }} />
                        </ListItemIcon>
                        <ListItemText primary="Blood Donation" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Science sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Climate Science Center" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <ChatBubble sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Community Help" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <MonitorHeart sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Emotional Health" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <CalendarMonth sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <HeartBroken sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Flag sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "10px" }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <VideoCall sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Live Videos" />
                    </ListItemButton>
                </Box>

            </Box>
        </Grid>
    )
}

export default Leftsidebar