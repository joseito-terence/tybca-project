import React, { useState, useEffect } from 'react';
import './Product.css';
import Accordion from '../Accordion/Accordion';
import db, { auth } from '../../firebase';
import { useParams } from 'react-router-dom';
import { currencyFormat } from '../../Utilities/currencyFormat';

const Product = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const email = auth.currentUser?.email;

  const [mainImage, setMainImage] = useState('');

  const viewProduct = (index) => {
    setMainImage(product.images[index])
  };

  const requiredSignIn = () => {
    /* addToCart and addToWishlist operations
     requires user to be authenticated. */

    document.querySelector('.header__actions > div > button').click(); // open login modal.
  }

  const addToCart = () => {                               // add to cart 
    if(email){
      console.log(email)
      db.doc(`customers/${email}`)
        .collection('cart')
        .doc(productId)
        .set({ qty: 1 })  
        .then(() => props.history.push('/cart'));           // and then redirect to /cart.
    }else{
      requiredSignIn();
    }
  }

  const addToWishList = () => {
    if(email){
      console.log(email)
      db.doc(`customers/${email}`)
        .collection('wishlist')
        .doc(productId)
        .set({ id: productId })
        .then(() => console.log('Added to wishlist'))
        .catch(err => console.log(err));
    }else{
      requiredSignIn();
    }
  }

  useEffect(() => {
    db.doc(`products/${productId}`)
      .get()
      .then(doc => {
        setProduct(doc.data());
        setMainImage(doc.data().images[0]);
      })
      .catch(err => console.log(err.message));
  }, [productId]);

  return (
    <div className='product__container'>
      <div className='product__images-display'>
        <img
          className='product__images-main'
          src={mainImage}
          alt={product?.title}
        />
        <div className='product__images-sub'>
          {product.images?.map((image, index) => 
            <img key={index} src={image} alt='' onClick={() => viewProduct(index)} />
          )}
        </div>
      </div>
      <div className='product__summary'>
        <h2 id='product__name'>{product?.title}</h2>
        <div className='product__credebility'>
          <p className='product__value'>{currencyFormat(product?.price)}</p>
          <div className='product__ratings'>
            <p className='product__rating-stars'>Ratings</p>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </div>
        </div>
        <button className="product__review btn btn-link">
          Write a Review
        </button>
        <div className='product__nav'>
          <Accordion id='productNav'>
            <Accordion.Item id='details' headerText='DETAILS'>
              Details of the product go here...
            </Accordion.Item>
            <Accordion.Item id='description' headerText='DESCRIPTION'>
              {product.description}
            </Accordion.Item>
            <Accordion.Item id='reviews' headerText='REVIEWS'>
              Reviews...............
            </Accordion.Item>
          </Accordion>
        </div>
        <button className='product__cart btn btn-primary' onClick={addToCart}>
          ADD TO CART
        </button>
        <button className='product__wishlist btn btn-link btn-block' onClick={addToWishList}>
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
};

export default Product;
