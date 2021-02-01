import React from 'react';
import './WishlistProduct.css';
import { Link } from "react-router-dom";

function WishlistProduct({ id, title, price, img, category, miniView }) {
  return (!miniView ? (
      <div className="wishlistProduct col-md-4 mb-5">
        <Link to={`/product/${id}`}>
          <div className="wishlistProduct__image z-dept-2 rounded border d-flex justify-content-center">
            <img src={img} alt={title} className="img-fluid w-10" />
          </div>
        </Link>
        <div className="text-center pt-4">
          <h5>{title}</h5>
          <p class="mb-2 text-muted text-uppercase small">{category}</p>
          <p className="rating mb-3">
            <i class="fas fa-star fa-sm text-primary"></i>
            <i class="fas fa-star fa-sm text-primary"></i>
            <i class="far fa-star fa-sm text-primary"></i>
            <i class="far fa-star fa-sm text-primary"></i>
            <i class="far fa-star fa-sm text-primary"></i>
          </p>
          <hr />
          <h6 className="mb-3">{`₹ ${price}.00`}</h6>
          <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
            <i class="fas fa-shopping-cart pr-2"></i>
            Add to cart
          </button>

          <button type="button" class="btn btn-secondary btn-sm mr-1 mb-2">
            <i class="fas fa-info-circle pr-2"></i>
            Details
          </button>

          <button
            type="button"
            class="btn btn-dark btn-sm px-3 mb-2"
            data-toggle="tooltip" 
            data-placement="top" 
            title="Tooltip on top"
            title="Remove from wishlist"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    ) : (
      <div className="wishlistProduct-mini col-12 mb-2">         
        <img src={img} alt={title} className="img-fluid w-10" />
        <div>
          <span className='title'>{title}</span>
          <span className='price'>{`₹ ${price}.00`}</span>
        </div>
        <Link to={`/product/${id}`} className='stretched-link'></Link>   
      </div>
    )
  );
}

export default WishlistProduct;