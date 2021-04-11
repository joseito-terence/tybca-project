import React from 'react';
import Shimmer from './Shimmer';
import './Skeleton.css';

function SkeletonElement({ classes }) {
  return (
    <div className={`skeleton ${classes}`}>
      <Shimmer />
    </div>
  )
}

export default SkeletonElement;
