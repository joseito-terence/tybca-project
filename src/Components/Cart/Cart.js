import React from "react";
import Items from "./Items";
import Summary from "./Summary";
import "./Cart.css";

function Cart() {
  return (
    <div className="shoppingCart mx-auto p-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="pb-3 ml-2">SHOPPING CART</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <Items />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
