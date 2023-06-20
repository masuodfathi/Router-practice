import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Products = () => {
  const style = () => {
    return {
      width: "488px",
      height: "133px",
    };
  };
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "undeline",
    };
  };

  return (
    <>
      <h1>Products</h1>
      <nav className="secondary">
        <ul>
            <li><NavLink style={navLinkStyle} to="feature">Feature</NavLink></li>
            <li><NavLink style={navLinkStyle} to="new">New</NavLink></li>
        </ul>
      </nav>
      <Outlet />
      <textarea
        type="text"
        placeholder="Search your product"
        style={{ style }}
      ></textarea>
    </>
  );
};
