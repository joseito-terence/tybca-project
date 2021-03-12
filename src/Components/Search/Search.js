import React from 'react';
import './Search.css';
import SearchProvider from '../SearchProvider';
import { RangeInput, RefinementList, } from 'react-instantsearch-dom';
import SearchResults from './SearchResults';

function Search() {
  return (
    <SearchProvider>
      <main className='search'>
        <Sidebar />
        <SearchResults />
      </main>
    </SearchProvider>
  )
}
export default Search;


const Sidebar = () => (
  <div className="sidebar">
    <h5 className='subtitle'>Category</h5>
    <RefinementList 
      attribute='category' 
      limit={10} 
      showMore
    />
    <h5 className='subtitle'>Price</h5>
    <RangeInput attribute='price' translations={{ submit: 'Go' }} />
  </div>
);

