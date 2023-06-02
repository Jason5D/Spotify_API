import React, { useState } from 'react';
import data from '../Data/data.json';

function SearchBar({ onAddToQueue }) {
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

  const handleAddToQueue = item => {
    onAddToQueue(item);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map(item => (
            <div key={item.id}>
              <p>{item.track} by {item.artist}, {item.album}</p>
              <button onClick={() => handleAddToQueue(item)}>Add</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



export default SearchBar;


