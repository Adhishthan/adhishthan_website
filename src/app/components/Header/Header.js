import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./header.css";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="header">
      <Navbar toggle={toggle} open={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default Header;
