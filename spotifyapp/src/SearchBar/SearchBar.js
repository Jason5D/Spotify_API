import React, { useState } from 'react';
import data from '../Data/data.json';

function SearchBar({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = () => {
  //   const results = data.filter(item => item.track.toLowerCase().includes(searchTerm.toLowerCase()));
  //   onSearchResults(results);
  //   setSearchTerm('');
  // };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const results = data.filter(item => item.track.toLowerCase().includes(value.toLowerCase()));
    onSearchResults(results);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
{searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((item) => (
            <p key={item.id}>{item.track}</p>
          ))}
        </div>
      )}


      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default SearchBar;

