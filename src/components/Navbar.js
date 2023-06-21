import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Navbar = () => {
  const auth = useAuth();
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
        {!auth.user ?
          <li>
            <NavLink style={navLinkStyle} to="/login">
              Login
            </NavLink>
          </li>
          :
          ''
        }
        {auth.user ?
          <li>
            <NavLink style={navLinkStyle} to="/profile">
              Profile
            </NavLink>
          </li>
          :
          ''
        }
      </ul>
    </nav>
  );
};
