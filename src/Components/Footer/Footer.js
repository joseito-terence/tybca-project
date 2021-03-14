import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__sitemap">
          <h5>Sitemap</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact-form">
          <h5>Sell your products</h5>
          <a href="#link-to-seller-side">Register your business.</a>
        </div>
        <div className="footer__details">
          <img
            src="https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png"
            alt=""
          />
          <i className="fas fa-phone-alt"> (+91) 10000000000</i> <br />
          <i className="fas fa-envelope"> ourCompany@gmail.com</i>
        </div>
      </footer>
      <div className="footer__copyright">
        Copyright &copy; 2020 All Rights Reserved Company name
      </div>
    </>
  );
}

export default Footer;
