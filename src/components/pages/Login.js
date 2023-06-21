import React, { useState } from 'react'
import { useAuth } from '../AuthContext'
import { useNavigate , useLocation} from 'react-router-dom';

export const Login = () => {
    const location = useLocation();
    const [user,setUser] = useState();
    const navigate = useNavigate();
    const Auth = useAuth();
    const loginHandler = () =>{
        Auth.login(user);
        navigate('/profile',{replace:true});
        const redirect = location.state? location.state.path : '/';
        console.log(redirect);
    }

    
  return (
    <>
        <h2>Login</h2>
        <div>
            <input type='text' onChange={(e)=> setUser(e.target.value)}/>
            <button onClick={loginHandler}>Login</button>
        </div>
    </>
  )
}
