import React from "react";
import "./Wishlist.css";
import WishlistProduct from "./WishlistProduct/WishlistProduct";


function Wishlist() {
  return (
    <div className="wishlist container mt-3">
      <div className="row">
        <div className="col-md-4 mb-5">
          <WishlistProduct
            id={"testkdaofjiq3oaireo"}
            name={"Red hoodie"}
            category={"Hoodies"}
            img={
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
            }
          />
        </div>
        <div className="col-md-4 mb-5">
          <WishlistProduct
            id={"testkdaofjiq3oaireo"}
            name={"Red hoodie"}
            category={"Hoodies"}
            img={
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
            }
          />
        </div>
        <div className="col-md-4 mb-5">
          <WishlistProduct
            id={"testkdaofjiq3oaireo"}
            name={"Red hoodie"}
            category={"Hoodies"}
            img={
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Wishlist;


