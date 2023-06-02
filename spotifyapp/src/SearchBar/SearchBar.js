import React, { useState } from 'react';
import data from '../Data/data.json';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(
      item =>
        item.track.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearchTerm(value);
    const results =
      value !== ''
        ? data.filter(
            item =>
              item.track.toLowerCase().includes(value.toLowerCase()) ||
              item.artist.toLowerCase().includes(value.toLowerCase()) ||
              item.album.toLowerCase().includes(value.toLowerCase())
          )
        : [];
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map(item => (
            <p key={item.id}>{item.track} by {item.artist}, {item.album}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;


