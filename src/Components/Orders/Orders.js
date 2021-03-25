import React, { useState, useEffect } from 'react';
import db, { auth } from '../../firebase';
import './Orders.css';

function Orders() {
  // const uid = auth.currentUser?.uid;
  const [uid, setUid] = useState('');
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      setUid(authUser.uid || null);
    })
  }, []);

  useEffect(() => {
    if(uid) {
      db.collection('orders')
        .where('customerId', '==', uid)
        .orderBy('order_date', 'desc')
        .limit(10)
        .get()
        .then(snap =>
          setOrders(
            snap.docs.map(doc => 
              ({ 
                ...doc.data(), 
                id: doc.id, 
                order_date: doc.data().order_date.toDate().toString() 
              })
            )
          )
        )
        .catch(err => console.log(err));
    }
  }, [uid]);

  return (
    <div className='orders container p-4'> 
      <div className="row mb-3">
        <div className="col">
          <h2>Your Orders</h2>
        </div>
      </div>
      {orders.map(order => (
        <div className="row mb-3" key={order.id}>
          <div className="col-2 p-0 order__image">
            <img src={order.image} alt={order.title} /> 
          </div>
          <div className="col-10">
            <h4>{order.title}</h4>
            <span>Ordered On: {order.order_date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Orders;