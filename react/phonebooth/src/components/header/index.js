import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const navigate = useNavigate()

  const {isLoggedIn}  = useSelector((state)=>state.auth);


  const onLogin = () => {
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Phone Booth
          </Typography>

         {!isLoggedIn&& <Button color='inherit' onClick={onLogin}>
            Login
          </Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header
