import React from 'react';
import Item from './Item';
import './Items.css';

function Items() {
  return (
    <div className='items w-100'>
      <h3>3 ITEMS</h3>
      <Item name="PRODUCT NAME" price="₹10,000.00" image="logo512.png" />
      <Item name="PRODUCT NAME" price="₹10,000.00" image="logo512.png" />
      <Item name="PRODUCT NAME" price="₹10,000.00" image="logo512.png" />
    </div>
  )
}

export default Items;
