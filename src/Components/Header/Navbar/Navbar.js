import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar__items">
          <NavItem link="/" text="Home" />
          <NavItem link="/aboutus" text="About Us" />
          <NavItem link="/products" text="Products" />
        </div>
      </nav>
    </section>
  );
}

function NavItem({ text, link }) {
  return (
    <NavLink exact activeClassName="navbar__item-active" to={link}>
      {text}
    </NavLink>
  );
}

export default Navbar;
