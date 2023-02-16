import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MLink from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { validateForm } from '../../utils/validation'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'

const initalValues = {
  email: '',
  password: '',
  confirmPassword: ''
}
const Signup = () => {
  const [values, setValues] = useState(initalValues)
  const [errors, setErrors] = useState(initalValues)

  const onInputChange = e => {
    const { name, value } = e.target
    /* const newValues = { ...values };
    newValues[name] = value;
     setValues(newValues); */
    setValues(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { isValid, errors } = validateForm(values)
    setErrors(errors)
    if (isValid) {
    }
  }

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              label='Email Address'
              name='email'
              type='email'
              onChange={onInputChange}
              value={values.email}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              name='password'
              label='Password'
              type='password'
              onChange={onInputChange}
              value={values.password}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              onChange={onInputChange}
              value={values.confirmPassword}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to='/signin'>
                  <MLink href='#' variant='body2'>
                    Already have an account? Sign In
                  </MLink>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Signup
