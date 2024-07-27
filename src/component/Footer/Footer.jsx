import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h3>menu link</h3>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">menu</a>
            </li>
            <li>
              <a href="">services</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>out services</h3>
          <ul>
            <li>
              <a href="">web design</a>
            </li>
            <li>
              <a href="">web development</a>
            </li>
            <li>
              <a href="">markiting</a>
            </li>
            <li>
              <a href="">product</a>
            </li>
            <li>
              <a href="">oriphic design</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>information</h3>
          <ul>
            <li>
              <a href="">about us</a>
            </li>
            <li>
              <a href="">deleviry information</a>
            </li>
            <li>
              <a href="">privacy policy</a>
            </li>
            <li>
              <a href="">terms & condation</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3>contact us</h3>
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
