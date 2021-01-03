import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
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
        
        

        <form className="header__search">
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
            <Link to='/cart'>
              <i className="fas fa-shopping-cart text-white">{" 3"}</i>
            </Link>
          </span>
        </div>
        
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
