import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { currencyFormat } from '../../../Utilities/currencyFormat';
import './Summary.css';

function Summary({ totalAmount }) {
  const history = useHistory();
  const location = useLocation();         
  const [pathName, setPathName] = useState('');   
  
  useEffect(() => {
    setPathName(location.pathname);   // set path whenever url changes.
  }, [location]);

  return (  
    <div className='summary w-100 mb-5'>
      <h3>ORDER SUMMARY</h3>
      
      {/* <div className="input-group">
        <div className="summary__promoCode">
          <i className="fas fa-tag"></i>
          <input type="text" name="promoCode" placeholder="HAVE A PROMO CODE?" />
        </div>   
        <div class="input-group-append">
          <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
      </div> */}

      {pathName === '/cart' && (
        <div className="summary__promoCode">
          <i className="fas fa-tag"></i>
          <input type="text" name="promoCode" placeholder="HAVE A PROMO CODE?" />
        </div> 
      )}
      <div className="summary__paymentAmt">
        <div>
          <span>Items: </span> <span>{currencyFormat(totalAmount)}</span>
        </div>
        <div>
          <span>Estimated Shipping: </span> <span>FREE</span>
        </div>
      </div>   

      <div className="summary__orderTotal">
        <span>ORDER TOTAL: </span>
        <span>{currencyFormat(totalAmount)}</span>
      </div>

      {pathName === '/cart' && (
        <button className="summary__checkoutBtn btn btn-primary mt-3 p-2 w-100" 
          disabled={totalAmount <= 0}
          onClick={() => history.push('/checkout')}
        >
          PROCEED TO CHECKOUT
        </button>
      )} 
    </div>
  )
}

export default Summary;
