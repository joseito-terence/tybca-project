import React from 'react';
import Accordion from '../../Accordion/';
import AccordianItem from '../../Accordion/AccordianItem/';
import './SideNav.css';

function SideNav() {
  return (
    <div className='sidenav'>
      <Accordion id='Categories'>
        <AccordianItem id='CategoryA' headerText='Category A'> 
          sub-categories for category A go here...
        </AccordianItem>
        <AccordianItem id='CategoryB' headerText='Category B'> 
          sub-categories for category B go here...
        </AccordianItem>
        <AccordianItem id='CategoryC' headerText='Category C'> 
          sub-categories for category C go here...
        </AccordianItem>
      </Accordion>
    </div>
  )
}

export default SideNav;
