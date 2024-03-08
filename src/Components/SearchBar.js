import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <Input 
        placeholder="Search..." 
        value={query} 
        onChange={handleInputChange} 
      />
      <Button color="primary" onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
