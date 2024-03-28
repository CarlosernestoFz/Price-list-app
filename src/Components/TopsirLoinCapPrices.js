import React from 'react';
import TopsirLoinImg from '../img/TopsirloinCap.jpg';
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { TopSirLoinCapList } from '../shared/topsirloincap';

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