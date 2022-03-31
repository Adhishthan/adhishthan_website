import "./sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = ({ children, isOpen }) => (
  <div className="sidebar" style={{ right: isOpen ? "0" : "-1000px" }}>
    {children}
  </div>
);

export const SidebarLink = ({ children, ...extra }) => (
  <Link {...extra} smooth={true} className="sidebar-link">
    {children}
  </Link>
);

export const SidebarMenu = ({ children }) => (
  <div className="sidebar-menu">{children}</div>
);

export const CloseIcon = ({ toggle }) => (
  <FaTimes className="sidebar-closeIcon" onClick={toggle} />
);
