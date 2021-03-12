import React from 'react';
import { 
  Hits, 
  SearchBox, 
  Highlight,
  // connectAutoComplete, 
  connectStateResults
} from 'react-instantsearch-dom';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import SearchProvider from '../../SearchProvider/';

function SearchBar() {

  return (
    <div className="searchBar">
      <SearchProvider>
        <SearchBox translations={{ placeholder: 'Search' }} />
        <Results />
        {/* <Autocomplete /> */}
      </SearchProvider>
    </div>
  )
}
export default SearchBar;

// const Autocomplete = connectAutoComplete(
//   ({ hits, currentRefinement, refine }) => (
//     <>
//       <input
//         type="search"
//         className='form-control'
//         value={currentRefinement}
//         onChange={event => refine(event.currentTarget.value)}
//       />
//       <Results />
//     </>
//   )
// );

const Results = connectStateResults(
  ({ searchState }) => 
    searchState && searchState.query ? (
      <Hits hitComponent={Hit} />
    ) : //<div>No query</div>
    null
);

function Hit({ hit }) {
  return (
    <Link to={`/product/${hit.objectID}`}>
      <div className='hit'>
        <div className="hit__title">
          <Highlight hit={hit} attribute='title' tagName='b' />
          {/* {hit.title} */}
        </div>
      </div>
    </Link>
  )
}
