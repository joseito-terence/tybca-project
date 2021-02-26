import React from 'react';
import './Summary.css';

function Summary({ totalAmount }) {
  return (  
    <div className='summary w-100 mb-5'>
      <h3>ORDER SUMMARY</h3>
      
      <div className="summary__promoCode">
        <i className="fas fa-tag"></i>
        <input type="text" name="promoCode" placeholder="HAVE A PROMO CODE?"/>
      </div>   

      <div className="summary__paymentAmt">
        <div>
          <span>Items: </span> <span>₹{totalAmount}.00</span>
        </div>
        <div>
          <span>Estimated Shipping: </span> <span>FREE</span>
        </div>
      </div>   

      <div className="summary__orderTotal">
        <span>ORDER TOTAL: </span>
        <span>₹{totalAmount}.00</span>
      </div>

      <button className="summary__checkoutBtn btn btn-primary mt-3 p-2 w-100">
        PROCEED TO CHECKOUT
      </button>
    </div>
  )
}

export default Summary;
