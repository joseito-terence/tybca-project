import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { 
  Hits, 
  InstantSearch, 
  SearchBox, 
  Highlight,
  // connectAutoComplete, 
  connectStateResults
} from 'react-instantsearch-dom';
import './Search.css';
import { Link } from 'react-router-dom';

function Search() {
  const APP_ID = 'CNGF710VW0';
  const API_KEY = '6daedc34851003273065017840c58ad6'; 
  const searchClient = algoliasearch(APP_ID, API_KEY);

  return (
    <div className="search">
      <InstantSearch
        searchClient={searchClient}
        indexName='Products'
      >
        <SearchBox translations={{ placeholder: 'Search' }} />
        <Results />
        {/* <Autocomplete /> */}
      </InstantSearch>
    </div>
  )
}
export default Search;

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
