import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import './Reviews.css';

function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const unsubscribe = db.doc(`products/${productId}`)
      .collection('reviews')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snap => setReviews(snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

    return () => {
      unsubscribe();
    }

  }, [productId]);

  return (
    <div className='reviews'>   
      {reviews.map(review => (
        <div className="review__card">
          <div className="review__message">
            {review.review}
          </div>
          <div className="review__customerName">
            - {review.customerName}
          </div>
          <div className="review__timestamp">
            {review.timestamp.toDate().toString().slice(0, 24)}
          </div>
          <div className="review__rating">
            {[...Array(5)].map((x, i) => (
              <i 
                className={`
                  ${(i + 1) <= review.rating ? 'fas' : 'far'} 
                  fa-star 
                  text-warning
                `}
              ></i>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Reviews;
