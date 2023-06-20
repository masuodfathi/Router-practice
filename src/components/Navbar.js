import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyle = ({isActive}) =>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'undeline',
    }
  }

  return (
    <nav>
        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/About'>About</NavLink>
        
    </nav>
  )
}
