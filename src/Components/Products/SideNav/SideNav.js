import React from "react";
import Accordion from "../../Accordion/";
import Wishlist from "../../Wishlist";

import { toggleHamburgerMenu } from "../../Header/Navbar/Navbar";

import "./SideNav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <button type="button" className="sidenav__close btn" onClick={toggleHamburgerMenu}>
        <span>&times;</span>
      </button>
      <div>
        <Accordion id="Categories">
          <Accordion.Item id="CategoryA" headerText="Category A">
            sub-categories for category A go here...
          </Accordion.Item>
          <Accordion.Item id="CategoryB" headerText="Category B">
            sub-categories for category B go here...
          </Accordion.Item>
          <Accordion.Item id="CategoryC" headerText="Category C">
            sub-categories for category C go here...
          </Accordion.Item>
        </Accordion>

        <div className="sidenav__wishlist">
          <Wishlist miniView />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
