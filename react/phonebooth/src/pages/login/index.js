import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PersonIcon from '@mui/icons-material/Person'
import SiginInForm from '../../components/forms/signin'

const Login = () => {
  return (
    <div id='phonebooth-loginpage'>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, background: 'salmon' }}>
            <PersonIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <SiginInForm />
        </Box>
      </Container>
    </div>
  )
}

export default Login
