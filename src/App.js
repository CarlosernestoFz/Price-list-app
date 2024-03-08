import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ShoopingListDisplay from './Components/ShoopingList';
function App() {
  return (
    <div className="App">
      <div>
       <SearchBar/>
      </div>
      <ShoopingListDisplay/>
    </div>
  );
}

export default App;
