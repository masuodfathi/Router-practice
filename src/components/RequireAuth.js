import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate,useLocation } from 'react-router-dom';

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const Auth = useAuth();

    if (!Auth.user) {
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }

  return (
    children
  )
}
