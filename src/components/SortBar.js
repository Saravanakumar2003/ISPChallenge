import React from 'react';

function SortBar({ onSort }) {
  return (
    <div className="sort-bar">
      <p>Sort by:</p>
      <button onClick={() => onSort('price')}>Price</button>
      <button onClick={() => onSort('rating')}>Rating</button>
    </div>
  );
}

export default SortBar;



    