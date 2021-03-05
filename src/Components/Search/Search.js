import React, { useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import './Search.css';
import { Link } from 'react-router-dom';

function Search() {
  const APP_ID = 'CNGF710VW0';
  const API_KEY = '6daedc34851003273065017840c58ad6'; 
  const searchClient = algoliasearch(APP_ID, API_KEY);

  const showHits = () => 
    document.querySelector('.ais-Hits').style.display = 'block';

  const hideHits = () => 
    document.querySelector('.ais-Hits').style.display = 'none';
  
  useEffect(() => {
    const ais_searchBox = document.querySelector('.ais-SearchBox-input');
    ais_searchBox.addEventListener('focus', showHits);
    ais_searchBox.addEventListener('blur', hideHits);

    return () => {
      ais_searchBox.removeEventListener('focus', showHits);
      ais_searchBox.removeEventListener('blur', hideHits);
    }
  }, []);

  return (
    <div className="search">
      <InstantSearch
        searchClient={searchClient}
        indexName='Products'
      >
        <SearchBox translations={{ placeholder: 'Search' }} />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  )
}
export default Search;


function Hit({ hit }) {
  return (
    <Link to={`/product/${hit.objectID}`}>
      <div className='hit'>
        <div className="hit__title">
          {hit.title}
        </div>
        {/* <div className="hit__tags">
          {hit.tags.join(', ')}
        </div> */}
      </div>
    </Link>
    
  )
}