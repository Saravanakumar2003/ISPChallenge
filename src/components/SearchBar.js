import React from 'react';
import '../styles.css';

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <label htmlFor="search-bar" className="search-label">Search ISPs:</label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search (by ISP name, price, rating)"
        onChange={handleSearch}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;