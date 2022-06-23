import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { SideBar, NavBar } from '../components';

const drawerWidth = 320;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>


            {/* navbar drawerWidth */}
            <NavBar drawerWidth={drawerWidth} />


            {/* sidebar drawerWidth */}
            <SideBar drawerWidth={drawerWidth} />

            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>


                {/* toolbar */}
                <Toolbar></Toolbar>

                {children}

            </Box>

        </Box>
    )
}
