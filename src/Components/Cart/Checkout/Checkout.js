import React, { useEffect, useState } from 'react';
import db, { auth } from '../../../firebase';
import './Checkout.css';

function Checkout() {
  const initialState = {
    address: '',        // address line 1
    address2: '',       // address line 2
    landmark: '',
    country: '', 
    state: '', 
    pincode: '',
  }
  const [address, setAddress] = useState(initialState);
  const customer_email = auth.currentUser?.email;

  const handleChange = ({ target }) => {    // handle change of form field text.
    setAddress({ ...address, [target.id]: target.value });
  }

  const submit = event => {
    event.preventDefault();
    
    db.doc(`customer/${customer_email}`)
      .set({                                // set() generally would override the document
        address   
      }, { merge: true })                   // the merge option allows to merge if the doc exists.
      .then(() => {
        // added to db.
        console.log('Address saved!');
      })
      .catch(err => console.error(err));

    console.log(address);
  }

  useEffect(() => {
    db.doc(`customer/${customer_email}`)
      .get()
      .then(doc => setAddress({ ...doc.data().address }))
      .catch(err => console.error(err));
  }, [customer_email]);

  return (
    <div className='checkout w-100'>   
      <h3 className='mb-3'>SHIPPING ADDRESS</h3>
      <div className="container">
        
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" value={address.address} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="address2" value={address.address2} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="landmark">Landmark <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="landmark" value={address.landmark} onChange={handleChange} />
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label for="country">Country</label>
              <input type='text' className="form-control d-block w-100" id="country" value={address.country} onChange={handleChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label for="state">State</label>
              <input type='text' className="form-control d-block w-100" id="state" value={address.state} onChange={handleChange} required />
            </div>
            <div className="col-md-3 mb-3">
              <label for="pincode">Pincode</label>
              <input type="text" className="form-control" id="pincode" value={address.pincode} onChange={handleChange} required />
            </div>
          </div>

          <input 
            type="submit" value="PLACE ORDER" 
            className='btn btn-primary d-block w-100 mt-3 font-weight-bold' 
          />

        </form>
     
      </div>
    </div>
  )
}
export default Checkout;