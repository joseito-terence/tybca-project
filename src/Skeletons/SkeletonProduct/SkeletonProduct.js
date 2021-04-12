import React from 'react';
import SkeletonElement from '../SkeletonElement';
import './SkeletonProduct.css';

function SkeletonProduct() {
  return (
    <div className='container'>
      <div className="row">
        <div className='col product__images-display'>
          <SkeletonElement classes='product__images-main mx-auto' />
          <div className='product__images-sub'>
            {[1,2,3,4].map(i => <SkeletonElement classes='product__images-sub-img m-1' key={i} />)}
          </div>
        </div>
        <div className='col product__summary'>
          <SkeletonElement classes='product__name title' />
          <SkeletonElement classes='product__value price' />
          
          <div className='product__nav'>
            {[1,2,3].map(i => <SkeletonElement classes='accordionItem' key={i} />)}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SkeletonProduct;
