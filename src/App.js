import React from 'react';
import './App.css';
import ChickenPrices from './Arrays/ChickenPrices';
import GroundBeefPrices from './Arrays/GroundBeefPrices';
import TopSirloinCapPrices from './Arrays/TopsirLoinCapPrices';
import { Container, Row, Col } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Container>
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
    </Container>
    </div>
  );
}

export default App;
