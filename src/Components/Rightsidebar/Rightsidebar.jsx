import React, { useState } from 'react'
import { Grid, ListItemButton, ListItemIcon, Avatar, Box, ListItemText, Typography } from '@mui/material'
import data from '../../data/dummy.json'
const Rightsidebar = () => {
    const [users, setUsers] = useState(data.data)
    return (
        <Grid item xs={2} sm={12} md={3} lg={3}>
            <Box sx={{ padding: "0px 10px" }}>
                <Typography variant='h6' sx={{ color: '#65676b' }}>
                    Contacts
                </Typography>
                {
                    users.map((user) => (
                        <ListItemButton key={user.user.id} sx={{ borderRadius: "10px" }}>
                            <ListItemIcon sx={{ position: 'relative' }}>
                                <Avatar alt="Tobibur Rohman" src={user.user.profile_picture} />
                                <span className="activeUser"></span>
                            </ListItemIcon>
                            <ListItemText primary={user.user.full_name} />
                        </ListItemButton>
                    ))
                }
            </Box>
        </Grid>
    )
}

export default Rightsidebar