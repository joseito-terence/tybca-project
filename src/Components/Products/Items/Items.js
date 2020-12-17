import React from "react";
import "./Items.css";
import Link from "react-router-dom/Link";

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
          <div className="col">
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
          <div className="col">
            <Item
              productName="Product Name"
              imgSrc="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
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
          <div className="col">
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
      to={`/products/${productId}`} 
      className="card bg-dark text-white"
    >
      <img class="card-img" src={imgSrc} alt={productName} />
      <div class="card-img-overlay">
        <h5 class="card-title">{productName}</h5>
      </div>
    </Link>
  );
}
