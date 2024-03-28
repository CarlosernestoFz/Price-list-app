import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { ChickensLegsList } from '../shared/chickenLegs';

ChickenLegsList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const ChickenlegsPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {ChickensLegsList.map(chickenlegs => (
            <Col key={chickenLegs.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='chickenbreast'
                src={Chicken}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {chickenLegs.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {chickenLegs.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {chickenLegs.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {chickenLegs.LowestPrice}</CardText>
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
  

export default ChickenlegsPrices;