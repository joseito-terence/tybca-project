import React from "react";
// import Accordion from "../../Accordion/";
import Wishlist from "../../Wishlist";
import { RangeInput, RefinementList, } from 'react-instantsearch-dom';

import { toggleHamburgerMenu } from "../../Header/Navbar/Navbar";

import "./SideNav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <button type="button" className="sidenav__close btn" onClick={toggleHamburgerMenu}>
        <span>&times;</span>
      </button>
      <div>
        <div className="sidenav__filters m-2">
          <h5 className='subtitle'>Category</h5>
          <RefinementList 
            attribute='category' 
            limit={8} 
            showMore
          />
          <h5 className='subtitle'>Price</h5>
          <RangeInput attribute='price' translations={{ submit: 'Go' }} />
        </div>

        <div className="sidenav__wishlist">
          <Wishlist miniView />
        </div>
      </div>
    </div>
  );
}

export default SideNav;


