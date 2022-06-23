import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, pageTitle = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='content'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                item
                className='box-shadow'
                xs={3}
                sx={{
                    width: { md: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant='h5' sx={{ mb: 1 }}>{pageTitle}</Typography>

                {/* placeholder para componentes hijos */}
                {children}

            </Grid>
        </Grid>
    )
}
