import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  Logo,
  Menu,
  MenuIcon,
  MenuItemWrapper,
  NavLink,
} from "./Navbar";

function Navbar({ toggle, open }) {
  const [showBtn, setShowBtn] = useState(false);
  const toggleBtn = () => {
    if (window.innerWidth <= 600) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
    console.log(window.innerWidth);
  };

  useEffect(() => {
    toggleBtn();
  }, []);

  window.addEventListener("resize", toggleBtn);

  return (
    // <div>Navbar {!showBtn && <Button>Menu</Button>}</div>
    <NavbarContainer>
      <Logo />
      <Menu>
        {showBtn && <MenuIcon open={open} onClick={toggle} />}
        {!showBtn && (
          <MenuItemWrapper>
            <NavLink to="about">About</NavLink>
            <NavLink to="events">Events</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </MenuItemWrapper>
        )}
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;
