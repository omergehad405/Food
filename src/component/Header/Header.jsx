import React, { useState, useRef } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [activeState, setActiveState] = useState("notActive");
  const navRef = useRef(null);

  function showNav() {
    if (activeState === "notActive") {
      navRef.current.style.left = "0";
      setActiveState("active");
    } else if (activeState === "active") {
      navRef.current.style.left = "-50rem";
      setActiveState("notActive");
    }
  }

  return (
    <header>
      <div className="container">
        <a className="logo" href="index.html">
          foods
        </a>

        <ul className="navList" ref={navRef}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/order">contact</Link>
          </li>
        </ul>

        <span className="bars" onClick={showNav}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
