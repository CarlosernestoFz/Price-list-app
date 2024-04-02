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
    <div>
      <div className="search-bar d-flex justify-content-center align-items-center">
        <Input
          style={{width: '400px', textAlign:'center', backgroundColor: '', color: '#333333'}}
          placeholder="Search ..." 
          value={query} 
          onChange={handleInputChange}>
        </Input>
      </div>    
      <div className="search-bar d-flex justify-content-center align-items-center">
          <Button color="primary"
          style={{width: '100px', backgroundColor: '#e6f7ff', color: '#333333', border:'none', marginTop:'5px'}}
          onClick={handleSearch}>Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;