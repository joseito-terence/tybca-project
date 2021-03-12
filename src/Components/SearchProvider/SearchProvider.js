import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-core';

function SearchProvider({ children }) {
  // This component is kind of like the a State Provider for all algolia's widgets.
  // It is to be used as a wrapper.
  const APP_ID = 'CNGF710VW0';
  const API_KEY = '6daedc34851003273065017840c58ad6'; 
  const searchClient = algoliasearch(APP_ID, API_KEY);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='Products'
    >
      {children}
    </InstantSearch>
  )
}
export default SearchProvider;