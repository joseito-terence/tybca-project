import React from 'react';
import './Items.css';
import Item from './Item';

function Items({ items, itemInfo }) {
  return (
    <div className='cartItems w-100'>
      <h3>{items.length} ITEMS</h3>
      {itemInfo.map((item, idx) => 
        <Item 
          key={idx} 
          id={item.id}
          name={item.title} 
          price={item.price} 
          image={item.images[0]} 
          quantity={items[idx]?.qty}
        />
      )}
    </div>
  )
}

export default Items;
