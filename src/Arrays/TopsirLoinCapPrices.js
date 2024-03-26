import React from 'react';
import TopsirLoinImg from '../img/TopsirloinCap.jpg';
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


const TopSirLoinCapList = [
    {
        id: 0,
        name: 'TopSirloinCap',
        RegularPrice: '17.89$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 1,
        name:'TopSirloinCap',
        RegularPrice: '21$/Kg',
        Location: 'SafeWay',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 2,
        name: 'TopSirloinCap',
        RegularPrice: '17$/Kg',
        Location: 'SafeOnFood',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 3,
        name: 'TopSirloinCap',
        RegularPrice: '20.55$/Kg',
        Location: 'SuperStore',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 4,
        name: 'TopSirloinCap',
        RegularPrice: '17.99$/Kg',
        Location: 'Costco',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 5,
        name: 'TopSirloinCap',
        RegularPrice: '18.99$/Kg',
        Location: 'NoFrill',
        LowestPrice: '9.99$/Kg'

    }
]

TopSirLoinCapList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const TopSirloinCapPrices = () => {
    return (
      <div>
        <h2>TopSirloinCap Prices</h2>
        <Row noGutters>
          {TopSirLoinCapList.map(topsirloincap => (
            <Col key={topsirloincap.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='Picaha'
                src={TopsirLoinImg}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {topsirloincap.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {topsirloincap.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {topsirloincap.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {topsirloincap.LowestPrice}</CardText>
                    </ListGroupItem>
                  </ListGroup>  
                  </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  export default TopSirloinCapPrices;