import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { SteakList } from '../shared/steak';

SteakList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const SteakPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {SteakList.map(steak => (
            <Col key={steak.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='chickenbreast'
                src={''}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {steak.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {steak.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {steak.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {steak.LowestPrice}</CardText>
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
  

export default SteakPrices;