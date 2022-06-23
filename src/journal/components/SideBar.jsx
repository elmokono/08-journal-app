import { LocalFireDepartment, TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth }, flexShrink: { sm: 0 }
            }}
        >

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'boder-box', width: drawerWidth }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Daniel Merdozzi</Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'April'].map(month => (

                            <ListItem key={month} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot></TurnedInNot>
                                        <Grid container>
                                            <ListItemText primary={month} />                                            
                                            <ListItemText secondary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                                        </Grid>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>

            </Drawer>
            


        </Box>
    )
}
