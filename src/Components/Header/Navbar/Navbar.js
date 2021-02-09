import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar__items">
          <button className="navbar__hamburger" onClick={toggleHamburgerMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <NavItem link="/" text="Home" />
          <NavItem link="/aboutus" text="About Us" />
          <NavItem link="/products" text="Products" />
        </div>
      </nav>
    </section>
  );
}

const toggleHamburgerMenu = () => {
  const nav = document.querySelector(".sidenav");
  nav?.classList.toggle("expand");

  if (nav?.classList[1]) {
    document
      .querySelector(".products > #carouselItems")
      .addEventListener("click", () => nav.classList.remove("expand"));
  }
};

function NavItem({ text, link }) {
  return (
    <NavLink exact activeClassName="navbar__item-active" to={link}>
      {text}
    </NavLink>
  );
}

export { toggleHamburgerMenu };
export default Navbar;
