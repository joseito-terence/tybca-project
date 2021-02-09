import React, { useState } from 'react';
import './Product.css';
import Accordion from '../Accordion/Accordion';

const Product = () => {
  const images = [
    {
      src:
        'https://images-na.ssl-images-amazon.com/images/I/61at7-x0VmL._UL1100_.jpg',
    },
    {
      src:
        'https://images-na.ssl-images-amazon.com/images/I/71VnfRIZWnL._UL1100_.jpg',
    },
    {
      src:
        'https://images-na.ssl-images-amazon.com/images/I/51DVfshuaTL._UL1100_.jpg',
    },
    {
      src:
        'https://images-na.ssl-images-amazon.com/images/I/51EUeTP2j2L._UL1100_.jpg',
    },
  ];

  const [mainImage, setMainImage] = useState(images[0].src);

  const viewProduct = (index) => {
    setMainImage(images[index].src)
  };

  return (
    <div className='product__container'>
      <div className='product__images-display'>
        <img
          className='product__images-main'
          src={mainImage}
          alt='Product Image'
        />
        <div className='product__images-sub'>
          {images.map((image, index) => {
            return (
              <img key={index} src={image.src} alt='' onClick={() => viewProduct(index)} />
            );
          })}
        </div>
      </div>
      <div className='product__summary'>
        <h2 id='product__name'>Product Name</h2>
        <div className='product__credebility'>
          <p className='product__value'>₹10,000.00</p>
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
              Description of the product goes here...
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
