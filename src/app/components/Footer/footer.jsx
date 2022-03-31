import React, { useEffect, useState } from "react";
import "./footer.css";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(toggleShow);
  window.addEventListener("scroll", toggleShow);

  return (
    <div className="footer-container" id="contact">
      <div className="footer-div">
        {show && (
          <Link className="scroll-to-top" to="home" smooth={true}>
            <FaArrowUp />
          </Link>
        )}
        <div className="footer-contact-div">
          <h2>Contact Info:</h2>
          <span>
            Call:
            <p> Vishva Garala<a href="tel:+917016532770">(+917016532770)</a> <br /></p>
            <p> Shivani Hathi<a href="tel:+917016265749">(+917016265749)</a> <br /></p>
            <p> Anish Patel<a href="tel:+917433027995">(+917433027995)</a> <br /></p>
            <p> Rohan Patel<a href="tel:+919106657401">(+919106657401)</a> <br /></p>
            Email:{" "}
            <a href="mailto:adhishthan2022@gmail.com">
              adhishthan2022@gmail.com
            </a>
            <br />
          </span>
        </div>
        <div className="footer-address-div">
          <h2>Address:</h2>
          <a href="https://g.page/MBIT-CVM-University?share">
            <span>
              Madhuben & Bhanubhai Patel Institute of Technology (MBIT)
              <br />
              P.O.Box No. 8 <br />
              Beyond Vithal Udhyog Nagar, <br />
              Dist. Anand, <br />
              St. Gujarat,
              <br />
              India.
            </span>
          </a>
        </div>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/adhishthan_2022/?utm_medium=copy_link"
          className="footer_icon"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/Adhishthan2022-109465561696724/"
          className="footer_icon"
          target="_blank"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.mbit.edu.in/"
          className="footer_icon"
          target="_blank"
        >
          <CgWebsite />
        </a>
      </div>
    </div>
  );
}

export default Footer;
