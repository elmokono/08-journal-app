import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignContent='center' sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={39} fontWeight='light'>June 22nd, 2022</Typography>
            </Grid>

            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Set a Title'
                    title='Title'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Describe your Day'
                    minRows={5}
                />

                {/* gallery */}
                <ImageGallery />

            </Grid>

        </Grid>
    )
}
