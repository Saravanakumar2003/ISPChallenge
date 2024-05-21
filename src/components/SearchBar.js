import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search (by ISP name, price, rating)"
      onChange={handleSearch}
      className="search-bar"
    />
  );
}

export default SearchBar;
