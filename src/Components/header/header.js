import React from "react";
import "./header.css";
import Navbar from "./navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#">
          <img
            className="header__logo"
            src="https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png"
            alt="logo"
          />
        </a>

        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-search"
          />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" id="button-search">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="header__actions">
          <button className="btn btn-secondary">Login</button>
          <span className="header__actionsCart">
            <i className="fas fa-shopping-cart">{"  "}</i>
          </span>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
