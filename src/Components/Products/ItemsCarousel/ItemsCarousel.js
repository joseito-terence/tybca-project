import React, { useState, useEffect } from 'react';
import './ItemsCarousel.css';
import Items from '../Items/';
import db from '../../../firebase';


function ItemsCarousel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection('products')
      .limit('24')
      .get()
      .then(snap => 
        setProducts(snap.docs.map(doc => ({id: doc.id, ...doc.data()})))
      )
      .catch(err => console.log(err.message));
  }, []);

  // console.log(products);

  return (
    <div id="carouselItems" className="carousel slide" data-ride="carousel" data-interval='0'>
      <ol className="carousel-indicators">
        <li data-target="#carouselItems" data-slide-to="0" className="active"></li>
        <li data-target="#carouselItems" data-slide-to="1"></li>
        <li data-target="#carouselItems" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Items products={products.slice(0,8)} />
        </div>
        <div className="carousel-item">
          <Items products={products.slice(8,16)} />
        </div>
        <div className="carousel-item">
          <Items products={products.slice(16,24)} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselItems" role="button" data-slide="prev">
      <i className="fa fa-angle-left text-dark"></i>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselItems" role="button" data-slide="next">
        <i className="fa fa-angle-right text-dark"></i>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default ItemsCarousel;
