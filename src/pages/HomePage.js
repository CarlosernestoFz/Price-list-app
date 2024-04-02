
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SearchBar from '../components/SearchBar'
import ChickenPrices from '../components/ChickenPrices'; // Adjust the import paths for other list components
import ComponentSelector from '../components/ComponentSelector';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <div className="home">
        <h1>Find the best Deals</h1>
        <SearchBar onSearch={handleSearch} />
        {/* Render the corresponding list component based on the search query */}
        {searchQuery === 'ChickenBreast' && <ChickenPrices />}
        {/* Add conditions for other search queries */}
      </div>
      <div>
        <ComponentSelector/>
      </div>
    </Container>
  );
};

export default Home;