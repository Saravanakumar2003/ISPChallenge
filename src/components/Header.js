import React from 'react';

function Header({ totalISP, apiHits }) {
  return (
    <header className="header">
      <h1>ISP HackerEarth</h1>
      <p>searching ISP made easy!</p>
      <div className="stats">
        <span>Total ISP: {totalISP}</span>
        <span>API Hits: {apiHits}</span>
      </div>
    </header>
  );
}

export default Header;
