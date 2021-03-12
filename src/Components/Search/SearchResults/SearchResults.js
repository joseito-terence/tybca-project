import React from 'react';
import './SearchResults.css';
import { 
  CurrentRefinements, 
  Hits, 
  Pagination, 
  SortBy,
  connectCurrentRefinements
} from 'react-instantsearch-dom';

function SearchResults() {
  return (
    <div className="searchResults w-100 p-2">
    {/* <Stats /> */}
    <div className="searchResults__options d-flex justify-content-between">
      <ClearRefinements />  {/* A button to clear all refinements/filters */}

      <SortBy 
        defaultRefinement='Products' 
        items={[
          {value: 'Products', label: 'Most Relevant'},
          { value: 'instant_search_price_asc', label: 'Price asc.' },
          { value: 'instant_search_price_desc', label: 'Price desc.' },
        ]}
      />
    </div>
    
    
    <CurrentRefinements />

    <Hits hitComponent={Hit} />
    <Pagination showLast/>
  </div>
  )
}
export default SearchResults;

const Hit = ({ hit }) => (
  <div className="hit">
    <div className="hit__image">
      <img src={hit.images} alt={hit.title} />
    </div>
    <h5>{hit.title}</h5>
    <p className='hit__rating'>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="far fa-star"></i>
    </p>
    <p className='hit__price'>₹ {hit.price}.00</p>
  </div>
);

const ClearRefinements = connectCurrentRefinements(
  ({ items, refine }) => (
    <button 
      type='button' 
      className='btn btn-secondary btn-sm rounded-sm'  
      onClick={() => refine(items)} disabled={!items.length}
    >
      Clear all filters
    </button>
  )
)
