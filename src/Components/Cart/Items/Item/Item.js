import React, { useState } from 'react';
import db, { auth } from '../../../../firebase';
import { currencyFormat } from '../../../../Utilities/currencyFormat';
import './Item.css';

function Item({ id, name, price, image, quantity }) {
  const [qty, setQty] = useState(quantity);
  const email = auth.currentUser?.email;

  const removeFromCart = () => {
    db.doc(`customers/${email}/cart/${id}`)
      .delete()
      .then(() => console.log("Removed from Cart"))
      .catch(err => console.log(err));
  }

  const handleQtyChange = ({ target }) => {
    setQty(target.value);                           // update local state with new qty.
    db.doc(`customers/${email}/cart/${id}`)         // update db with new qty.
      .update({ qty: parseInt(target.value) });
  }

  return (
    <div className="item">
      <img className="item__image" src={image} alt="item_image" />
      
      <div>
        <div className="item__details">
          <div className="item__name">{name}</div>
          <div className="item__price">{currencyFormat(price)}</div>
        </div>

        <div className="item__options">
          <select className="item__optionsQty btn btn-secondary" name="qty" value={qty} onChange={handleQtyChange}>
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
          </select>
          |
          <button className="item__optionsRemove btn btn-secondary" onClick={removeFromCart}>
            Remove
          </button>
        </div>
      </div>     
    </div>
  )
}

export default Item;
