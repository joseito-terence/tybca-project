import React from "react";
import "./header.css";
import Navbar from "./navbar";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/'>
          <img
            className="header__logo"
            src="https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png"
            alt="logo"
          />
        </Link>

        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-search"
          />
     
          <button type='submit' className="d-none" id="button-search">
            Search
          </button>
        </form>

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
