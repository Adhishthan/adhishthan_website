import React from "react";
import { SidebarContainer, SidebarLink, SidebarMenu } from "./Sidebar";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarLink to="about">About</SidebarLink>
        <SidebarLink to="events">Events</SidebarLink>
        <SidebarLink to="contact">Contact</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;
