import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

function Items({ products }) {
  return (
    <div className="items" >
      <div className="container">
        <div className="row">
          {products.slice(0, 2).map(product => 
            <div className="col" key={product.id}>
              <Item
                key={product.id}
                productId={product?.id}
                productName={product?.title}
                imgSrc={product?.images[0]}
                price={product?.price}
              />
            </div>)}
        </div>
        <div className="row">
          {products.slice(2,8).map(product => 
            <div className="col col-md-4 col-6" key={product.id}>
              <Item
                key={product.id}
                productId={product?.id}
                productName={product?.title}
                imgSrc={product?.images[0]}
                price={product?.price}
              />
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default Items;

function Item({ productId, productName, imgSrc, price }) {
  return (
    <Link 
      to={`/product/${productId}`} 
      className="card bg-dark text-white"
    >
      <img className="card-img" src={imgSrc} alt={productName} />
      <div className="card-overlay">
        <h5 className="card-title text-truncate">{productName}</h5>
        <p className="rating">
          <i className="fas fa-star fa-sm text-warning" aria-hidden="true"></i>
          <i className="fas fa-star fa-sm text-warning" aria-hidden="true"></i>
          <i className="fas fa-star fa-sm text-warning" aria-hidden="true"></i>
          <i className="fas fa-star fa-sm text-warning" aria-hidden="true"></i>
          <i className="far fa-star fa-sm text-warning" aria-hidden="true"></i>
        </p>
      	<p>₹ {price}.00</p>
      </div>
    </Link>
  );
}
