import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import WishlistProduct from "./WishlistProduct/WishlistProduct";


function Wishlist({ miniView }) {
  const [products, setProducts] = useState([
    {
      id: "testkdaofjiq3oaireo",
      title: "Red hoodie",
      price: 1000,
      category: "Hoodies",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
    },
    {
      id: "testkdaoiq3oaireo",
      title: "Red hoodie",
      price: 1000,
      category: "Hoodies",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
    },
    {
      id: "testkdaofjioaireo",
      title: "Red hoodie",
      price: 1000,
      category: "Hoodies",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
    },
  ]);

  return (
    <div className="wishlist container mb-3">
      <div className="row">
        <div className="col">
          <div className="text-center py-3">
            {!miniView ? (
              <h3 className="mb-0">Wishlist</h3> 
            ) : (
              <Link to='/wishlist'>
                  <h5 className='text-left text-light btn-link'>My Wishlist</h5>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        {products.map(product => (
          <WishlistProduct
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            img={product.img}
            miniView={miniView}
          />
        ))}
      </div>
    </div>
  );
}
export default Wishlist;

