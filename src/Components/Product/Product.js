import React, { useState, useEffect } from 'react';
import './Product.css';
import Accordion from '../Accordion/Accordion';
import db from '../../firebase';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const [mainImage, setMainImage] = useState('');

  const viewProduct = (index) => {
    setMainImage(product.images[index])
  };

  useEffect(() => {
    db.doc(`products/${productId}`)
      .get()
      .then(doc => {
        setProduct(doc.data());
        setMainImage(doc.data().images[0]);
      })
      .catch(err => console.log(err.message));
  }, []);

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
          <p className='product__value'>₹{product?.price}.00</p>
          <div className='product__ratings'>
            <p className='product__rating-stars'>Ratings</p>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </div>
        </div>
        <a className='product__review' href='#'>
          Write a Review
        </a>
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
        <button className='product__cart btn btn-primary'>
          ADD TO CART
        </button>
        <a className='product__wishlist btn btn-link btn-block'>
          ADD TO WISHLIST
        </a>
      </div>
    </div>
  );
};

export default Product;
