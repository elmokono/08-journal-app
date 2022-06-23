import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5 }}
    >

      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h5' color='white'>Choose or Create an Entry</Typography>
      </Grid>
    </Grid>
  )
}