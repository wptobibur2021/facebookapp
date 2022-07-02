import React from 'react'
import { Videocam, PhotoLibrary, Cancel, InsertEmoticon } from '@mui/icons-material'
import { Modal, Button, TextareaAutosize, Typography, Card, Box, ListItemButton, Avatar, ListItemText, ListItemIcon } from '@mui/material'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '10px',
    overflow: 'hidden'
};
const Share = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ mb: 2, px: 2 }}>
            <Box sx={{ borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', py: 1 }}>
                <Avatar sx={{ mr: 1 }} alt="Tobibur Rohman" src="/assets/images/users/tobibur.png" />
                <ListItemText onClick={handleOpen} sx={{ cursor: 'pointer', backgroundColor: '#f0f2f5', py: 1, px: 2, borderRadius: '25px' }} primary="What's on your mind, Tobibur?" />
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Box sx={{ borderBottom: '1px solid #ddd', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Create a post</Typography>
                        <Cancel onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '30px' }} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Box >
                            <TextareaAutosize
                                maxRows={10}
                                placeholder="What's on your mind, Tobibur?"
                                style={{ width: '100%', border: 'none', height: '250px', fontSize: '25px' }}
                            />
                        </Box>
                        <Button sx={{ width: '100%', backgroundColor: '#f0f2f5' }} disabled>Post</Button>
                    </Box>
                </Box>
            </Modal>
        </Card>
    )
}

export default Share