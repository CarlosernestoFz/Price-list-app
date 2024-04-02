import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { ChickenWingsList } from '../shared/chickenwings';

ChickenWingsList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const ChickenWingsPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {ChickenWingsList.map(chickenWings => (
            <Col key={chickenWings.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='chickenbreast'
                src={''}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {chickenWings.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {chickenWings.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {chickenWings.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {chickenWings.LowestPrice}</CardText>
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
  

export default ChickenWingsPrices;