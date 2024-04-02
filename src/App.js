import React from 'react';
import './App.css';
import ChickenPrices from './components/ChickenPrices';
import GroundBeefPrices from './components/GroundBeefPrices';
import TopSirloinCapPrices from './components/TopsirLoinCapPrices';
import { Container, Row, Col } from 'reactstrap';
import Home from './pages/HomePage';
function App() {
  return (
    <div className="App">
      {/* <Container>
      <Row>
        <Col>
          <TopSirloinCapPrices/>
        </Col>
      </Row>
      <Row>
        <Col>
          <GroundBeefPrices/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChickenPrices/>
        </Col>
      </Row>
    </Container> */}
    <Home/>
    </div>
  );
}

export default App;
