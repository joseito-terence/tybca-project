import React from 'react';
import SkeletonElement from '../SkeletonElement';
import './SkeletonProduct.css';

function SkeletonProduct() {
  return (
    <div className='product__container'>
      <div className='product__images-display'>
        <SkeletonElement classes='product__images-main mx-auto' />
        <div className='product__images-sub'>
          {[1,2,3,4].map(i => <SkeletonElement classes='image-sub' key={i} />)}
        </div>
      </div>
      <div className='product__summary'>
        <SkeletonElement classes='product__name title' />
        <div className='product__credebility'>
          <SkeletonElement classes='product__value price' />
        </div>
 
        <div className='product__nav'>
          {[1,2,3].map(i => <SkeletonElement classes='accordionItem' key={i} />)}
        </div>
      </div>
    </div>
  )
}

export default SkeletonProduct;
