import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout pageTitle='Register New Account'>
      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Email' type='email' placeholder='contoso@gmail.com' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Alias' type='text' placeholder='your alias or nick' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Password' type='password' placeholder='password' fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>Register</Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already registered?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'><Typography>Login</Typography></Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
