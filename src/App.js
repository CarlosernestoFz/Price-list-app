import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ChickenPrices from './Arrays/ChickensList';
import GroundBeefPrices from './Arrays/GroundBeefs';
import TopSirloinCapPrices from './Arrays/TopsirLoinCap';
function App() {
  return (
    <div className="App">
      <div>
       <SearchBar/>
      </div>
      <ChickenPrices/>
      <GroundBeefPrices/>
      <TopSirloinCapPrices/>
    </div>
  );
}

export default App;
