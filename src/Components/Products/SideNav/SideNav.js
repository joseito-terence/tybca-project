import React from 'react';
import Accordion from '../../Accordion/';

import './SideNav.css';

function SideNav() {
  return (
    <div className='sidenav'>
      <Accordion id='Categories'>
        <Accordion.Item id='CategoryA' headerText='Category A'> 
          sub-categories for category A go here...
        </Accordion.Item>
        <Accordion.Item id='CategoryB' headerText='Category B'> 
          sub-categories for category B go here...
        </Accordion.Item>
        <Accordion.Item id='CategoryC' headerText='Category C'> 
          sub-categories for category C go here...
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default SideNav;
