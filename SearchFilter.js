import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality and call onFilter with the search term
    onFilter(searchTerm);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search profiles"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
