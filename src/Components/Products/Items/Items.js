import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

function Items({ products }) {
  return (
    <div className="items">
      <div className="container">
        <div className="row">
          <div className="col" style={{ minWidth: "60%" }}>
            <Item
              productId={products[0]?.id}
              productName={products[0]?.title}
              imgSrc={products[0]?.images[0]}
            />
          </div>
          <div className="col">
            <Item
              productId={products[1]?.id} 
              productName={products[1]?.title}
              imgSrc={products[1]?.images[0]}
            />
          </div>
        </div>
        <div className="row">
          {products.slice(2,8).map(product => 
            <div className="col col-md-4 col-6">
              <Item
                productId={product?.id}
                productName={product?.title}
                imgSrc={product?.images[0]}
              />
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default Items;

function Item({ productId, productName, imgSrc }) {
  return (
    <Link 
      to={`/product/${productId}`} 
      className="card bg-dark text-white"
    >
      <img className="card-img" src={imgSrc} alt={productName} />
      <div className="card-img-overlay">
        <h5 className="card-title">{productName}</h5>
      </div>
    </Link>
  );
}
