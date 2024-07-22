import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  // Using the useState hook to manage the query state
  const [query, setQuery] = useState('');

  // Function to handle the search button click
  const handleSearch = () => {
    // Calling the onSearch function passed as a prop with the current query
    onSearch(query);
  };

  return (
    <div>
      {/* Input field for the search query */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      {/* Button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
