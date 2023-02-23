import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/header'
import UsersList from '../../components/userList'

const Dashboard = () => {
  const userInfo = useSelector((state)=>state.user.userDetails);
  return (
    <div>
      <Header />
      <Typography variant="h4" component={"h4"} color='secondary' m={4}>
        Hello, {userInfo && userInfo.email}
      </Typography>
      <UsersList />
    </div>
  )
}

export default Dashboard
