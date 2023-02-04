import React from 'react'

const Card = props => {
  const { user } = props
  return (
    <div className='card'>
      <p className='info'>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>
      <p className='info'>
        <span>{user.email}</span>
        <span>{user.phone}</span>
      </p>
      <p className='desc'>{user.description}</p>
    </div>
  )
}

export default Card
