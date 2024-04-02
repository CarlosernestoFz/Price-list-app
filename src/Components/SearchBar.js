import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

const SearchBar = ({ onSearch, itemList }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredList = itemList.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filteredList);
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