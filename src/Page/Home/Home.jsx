import React from 'react'
import { Box, Grid } from '@mui/material';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import Posts from '../../Components/Posts/Posts';
import Rightsidebar from '../../Components/Rightsidebar/Rightsidebar';
import Navbar from '../../Components/NavBar/Navbar';
const Home = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Box sx={{ backgroundColor: '#f0f2f5', marginTop: '30px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Leftsidebar></Leftsidebar>
                    <Posts></Posts>
                    <Rightsidebar></Rightsidebar>
                </Grid>
            </Box>
        </Box>

    )
}

export default Home