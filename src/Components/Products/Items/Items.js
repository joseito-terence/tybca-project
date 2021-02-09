import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

function Items() {
  return (
    <div className="items">
      <div className="container">
        <div className="row">
          <div className="col" style={{ minWidth: "60%" }}>
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
          <div className="col">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
        {/* </div> */}
        {/* <div className="row"> */}
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
          <div className="col col-md-4 col-6">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
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
