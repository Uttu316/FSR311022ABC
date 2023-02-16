import { Button, Grid, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { validateForm } from '../../utils/validations'

const formIntialValues = {
  email: '',
  password: ''
}
const SiginInForm = () => {
  const [form, setForm] = useState(formIntialValues)
  const [errors, setErrors] = useState(formIntialValues)

  const onChangeInput = e => {
    const { value, name } = e.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { isValid, errors } = validateForm(form)
    setErrors(errors)
    if (isValid) {
      //make API Call and submit form details to BE
    }
  }

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        value={form.email}
        autoFocus
        onChange={onChangeInput}
        error={errors.email}
        helperText={errors.email}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
        value={form.password}
        onChange={onChangeInput}
        error={errors.password}
        helperText={errors.password}
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SiginInForm
