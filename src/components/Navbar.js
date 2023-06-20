import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "undeline",
    };
  };

  return (
    <nav className="primary">
      <ul>
        <li>
          <NavLink style={navLinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
