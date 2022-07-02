import React from 'react'
import { Grid, Box } from '@mui/material'
import posts from '../../data/dummy.json'

import Single from './Single'
import Share from './Share'
const Posts = () => {
    const postData = posts.data
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} className="postContentArea">
            <Box sx={{ px: { xs: 2, md: 4 } }}>
                <Share />
                {
                    postData.map((post) => <Single key={post.id} post={post} />)
                }
            </Box>
        </Grid>
    )
}

export default Posts