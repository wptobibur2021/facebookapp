import React from 'react'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@mui/icons-material'
import { Card, Box, ListItemButton, Avatar, ListItemText, ListItemIcon } from '@mui/material'
const Share = () => {

    return (
        <Card sx={{ mb: 2, px: 2 }}>
            <Box sx={{ borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', py: 1 }}>
                <Avatar sx={{ mr: 1 }} alt="Tobibur Rohman" src="/assets/images/users/tobibur.png" />
                <ListItemText sx={{ cursor: 'pointer', backgroundColor: '#f0f2f5', py: 1, px: 2, borderRadius: '25px' }} primary="What's on your mind, Tobibur?" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px 0px' }}>
                <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ListItemIcon sx={{ minWidth: '35px' }}>
                        <Videocam sx={{ color: '#f3425f' }} />
                    </ListItemIcon>
                    <ListItemText primary="Like" />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px', }}>
                    <ListItemIcon sx={{ minWidth: '35px' }}>
                        <PhotoLibrary sx={{ color: '#f3425f' }} />
                    </ListItemIcon>
                    <ListItemText primary="Comments" />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px', }}>
                    <ListItemIcon sx={{ minWidth: '35px' }}>
                        <InsertEmoticon sx={{ color: '#f3425f' }} />
                    </ListItemIcon>
                    <ListItemText primary="Share" />
                </ListItemButton>
            </Box>
        </Card>
    )
}

export default Share