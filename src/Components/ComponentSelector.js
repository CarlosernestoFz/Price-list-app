import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import ChickenPrices from './ChickenPrices'; // Import your components here
import GroundBeefPrices from './GroundBeefPrices';
import ChickenWingsPrices from './ChickenWings';
import EggsPrices from './Eggs';
import OrganicEggsPrices from './OrganicEggs';
import ChickenlegsPrices from './ChickenLegs';
import SalmonPrices from './Salmon';
import SteakPrices from './Steak';
import TopSirloinCapPrices from './TopsirLoinCapPrices';
import PorkTenderloinPrices from './porkTenderloin';

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentSelect = (componentName) => {
    // If the same component is clicked twice, close it
    setSelectedComponent(selectedComponent === componentName ? null : componentName);
  };

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
        <div className='text-center'>
        <h2> </h2>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3" 
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('ChickenPrices')}> Chicken Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3" 
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none', marginBottom:'10px' }}
                onClick={() => handleComponentSelect('ChickenPrices')}> Chicken Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary"  
                className="btn-block mb-3" 
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('GroundBeefPrices')}> Ground Beef Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary"
                className="btn-block mb-3" 
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none',}}
                onClick={() => handleComponentSelect('ChickenWings')}>Chicken wings
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3" 
                style={{ width: '200px',backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('Eggs')}>  Eggs Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>    
            <Button color="primary"  
                className="btn-block mb-3"
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('OrganicEggs')}> Organic Eggs Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3"
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('ChickenLegs')}> Chicken Legs Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3"
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('Salmon')}> Salmon Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3" 
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('Steak')}> Steak Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary"  
                className="btn-block mb-3"
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('TopsirLoinCap')}> TopsirLoinCap Prices
            </Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
            <Button color="primary" 
                className="btn-block mb-3"
                style={{width: '200px', backgroundColor: '#e6f7ff', color: '#333333', border:'none' }}
                onClick={() => handleComponentSelect('PorkTenderloin')}> PorkTenderloin Prices
            </Button>
        </div>
        {/* Conditionally render the selected component */}
        {selectedComponent === 'ChickenPrices' && <ChickenPrices />}
        {selectedComponent === 'GroundBeefPrices' && <GroundBeefPrices />}
        {selectedComponent === 'ChickenWings' && <ChickenWingsPrices />}
        {selectedComponent === 'Eggs' && <EggsPrices />}
        {selectedComponent === 'OrganicEggs' && <OrganicEggsPrices/>}
        {selectedComponent === 'ChickenLegs' && <ChickenlegsPrices/>}
        {selectedComponent === 'Salmon' && <SalmonPrices/>}
        {selectedComponent === 'Steak' && <SteakPrices/>}
        {selectedComponent === 'TopsirLoinCap' && <TopSirloinCapPrices/>}
        {selectedComponent === 'PorkTenderloin' && <PorkTenderloinPrices/>}
        {/* Add more conditional rendering for other components */}
        </div>
    </Container>
  );
};

export default ComponentSelector;