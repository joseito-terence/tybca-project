import React from 'react';
import './Item.css';

function Item({ name, price, image }) {
  return (
    <div className="item">
      <img className="item__image" src={image} alt="item_image" />
      
      <div>
        <div className="item__details">
          <div className="item__name">{name}</div>
          <div className="item__price">{price}</div>
        </div>

        <div className="item__options">
          <select className="item__optionsQty btn btn-secondary" name="qty" id="">
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
          </select>
          |
          <button className="item__optionsRemove btn btn-secondary">
            Remove
          </button>
        </div>
      </div>     
    </div>
  )
}

export default Item;
