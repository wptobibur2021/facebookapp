import React from 'react'
import { Card, Box, IconButton, CardHeader, Avatar, CardMedia, ListItemButton, ListItemIcon, ListItemText, CardContent, Typography } from '@mui/material'
import { MoreHoriz, ThumbUp, ChatBubbleOutline, Shortcut } from '@mui/icons-material';
import { format } from "timeago.js"
const Single = ({ post }) => {
    const { caption, created_time, images } = post
    console.log('Post', post)
    const date = new Date(created_time);
    console.log('Date:', date)
    return (
        <Card sx={{ mb: 2 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" alt={caption.from.profile_picture} src={caption.from.profile_picture} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title={caption.from.full_name}
                subheader={format(created_time)}
                sx={{ paddingBottom: '0px' }}
            />
            <CardContent>
                <Typography variant="p" sx={{ textAlign: 'justify' }} color="text.secondary">
                    {caption.text.slice(0, 100)}...<a href="#">See more</a>
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={images.standard_resolution.url}
                alt="Paella dish"
            />
            <Box sx={{ padding: '0px 20px', }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img className="postReactionIcon" src="/assets/images/like.png" alt="Like Icon" />
                        <img className="postReactionIcon" src="/assets/images/heart.png" alt="Heart Icon" />
                        <Typography variant="p" sx={{ fontSize: '14px' }}>Tobibur Rohman and Others</Typography>
                    </Box>
                    <Box>
                        <Typography variant="p" sx={{ fontSize: '14px' }}>12 Comments</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px 0px' }}>
                    <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px' }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <ThumbUp />
                        </ListItemIcon>
                        <ListItemText primary="Like" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px', }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <ChatBubbleOutline />
                        </ListItemIcon>
                        <ListItemText primary="Comments" />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: "5px", padding: '4px 10px', }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            <Shortcut />
                        </ListItemIcon>
                        <ListItemText primary="Share" />
                    </ListItemButton>
                </Box>
            </Box>
        </Card>
    )
}

export default Single