import React from 'react';
import ItemsCarousel from './ItemsCarousel/';
import SideNav from './SideNav/';

function Products() {
  return (
    <div className='products d-flex'>
      <SideNav />
      <ItemsCarousel />
    </div>
  )
}

export default Products;
