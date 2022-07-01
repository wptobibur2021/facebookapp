import React from 'react'
import { Grid, Box, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Group, Groups, MonitorHeart, HeartBroken, VideoCall, Flag, ChatBubble, Bloodtype, Store, CalendarMonth, QueryBuilder, Bookmark, Science } from '@mui/icons-material';
import './Leftsidebar.css'
const Leftsidebar = () => {
    return (
        <Grid item xs={2} sm={12} md={3} lg={3}>
            <Box className="leftSidebarArea">
                <Box sx={{ padding: "0px 10px" }}>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Avatar alt="Tobibur Rohman" src="/assets/images/users/tobibur.png" />
                        </ListItemIcon>
                        <ListItemText primary="Tobibur Rohman" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon classname="leftSidebarIcon">
                            <Group sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Groups sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Store sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <QueryBuilder sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Memories" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Bookmark sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Saved" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Bloodtype sx={{ fontSize: '25px', color: 'red' }} />
                        </ListItemIcon>
                        <ListItemText primary="Blood Donation" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Science sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Climate Science Center" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <ChatBubble sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Community Help" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <MonitorHeart sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Emotional Health" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <CalendarMonth sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <HeartBroken sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
                            <Flag sx={{ fontSize: '25px', color: '#385898' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px" }}>
                        <ListItemIcon>
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