import "./navbar.css";
import { Button } from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const NavbarContainer = ({ children }) => (
  <div className="navbar" id="navbar">
    {children}
  </div>
);

export const Logo = () => (
  <Link to="home" smooth={true}>
    <img src={logo} />
  </Link>
);

export const Menu = ({ children }) => <div className="menu">{children}</div>;

export const MenuIcon = ({ onClick, ref, open, ...extra }) => (
  <Button className="menu-icon" onClick={onClick}>
    {open ? <FaTimes className="icon" /> : <FaBars className="icon" />}
  </Button>
);

export const MenuItemWrapper = ({ children, ...extra }) => (
  <div className="menu-wrapper" {...extra}>
    {children}
  </div>
);

export const NavLink = ({ children, ...extra }) => (
  <Link {...extra} smooth={true} className="menu-item">
    {children}
  </Link>
);
