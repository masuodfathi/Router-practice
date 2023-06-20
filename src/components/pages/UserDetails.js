import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const {UserId} = useParams();
    
  return (
    <div>User {UserId} Details Page</div>
  )
}
