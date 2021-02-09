import React from 'react';
import './ItemsCarousel.css';
import Items from '../Items/';

function ItemsCarousel() {
  return (
    <div id="carouselItems" className="carousel slide" data-ride="carousel" data-interval='0'>
      <ol className="carousel-indicators">
        <li data-target="#carouselItems" data-slide-to="0" className="active"></li>
        <li data-target="#carouselItems" data-slide-to="1"></li>
        <li data-target="#carouselItems" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Items />
        </div>
        <div className="carousel-item">
          <Items />
        </div>
        <div className="carousel-item">
          <Items />
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
