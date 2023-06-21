import React from 'react'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const Auth = useAuth();
    const navigate = useNavigate();
    const logoutHandler = () =>{
        Auth.logout();
        navigate('/');
    }
  return (
    <>
        {
            Auth.user?
            <>
            <div>Profile page</div>
            <h3>
            Welcome {Auth.user}
            </h3>
            <button onClick={logoutHandler}>Logout</button>
            </>
            :
            navigate('/')
        }
        
    </>
  )
}
