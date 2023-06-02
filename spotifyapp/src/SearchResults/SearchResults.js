import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';

function SearchResults() {
  const [results, setResults] = useState([]);

  const handleSearchResults = (searchResults) => {
    setResults(searchResults);
  };

  return (
    <div>
      <SearchBar onSearchResults={handleSearchResults} />

      <div>
        <h2>Search Results</h2>
        {results.map((item) => (
          <p key={item.id}>{item.track}</p>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

