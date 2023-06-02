import React, { useState } from 'react';
import data from '../Data/data.json';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(item => item.track.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((item) => (
            <p key={item.id}>{item.track}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
