import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar__items">
          <a href='#' className="navbar__item-active">Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Products</a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
