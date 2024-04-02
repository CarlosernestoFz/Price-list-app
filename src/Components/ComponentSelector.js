import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ChickenPrices from './ChickenPrices'; // Import your components here
import GroundBeefPrices from './GroundBeefPrices';
import ChickenWingsPrices from './ChickenWings';

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentSelect = (componentName) => {
    // Set the selected component based on the button clicked
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <h2>Select a Component</h2>
      <Button color="primary" onClick={() => handleComponentSelect('ChickenPrices')}>
        Chicken Prices
      </Button>
      <Button color="primary" onClick={() => handleComponentSelect('GroundBeefPrices')}>
        Ground Beef Prices
      </Button>
      <Button color="primary" onClick={() => handleComponentSelect('ChickenWings')}>
        Chicken wings
      </Button>
      <Button color="primary" onClick={() => handleComponentSelect('GroundBeefPrices')}>
        Ground Beef Prices
      </Button>      <Button color="primary" onClick={() => handleComponentSelect('ChickenPrices')}>
        Chicken Prices
      </Button>
      <Button color="primary" onClick={() => handleComponentSelect('GroundBeefPrices')}>
        Ground Beef Prices
      </Button>
      {/* Conditionally render the selected component */}
      {selectedComponent === 'ChickenPrices' && <ChickenPrices />}
      {selectedComponent === 'GroundBeefPrices' && <GroundBeefPrices />}
      {selectedComponent === 'ChickenWings' && <ChickenWingsPrices />}
      {selectedComponent === 'GroundBeefPrices' && <GroundBeefPrices />}
      {selectedComponent === 'GroundBeefPrices' && <GroundBeefPrices />}
      {/* Add more conditional rendering for other components */}
    </div>
  );
};

export default ComponentSelector;