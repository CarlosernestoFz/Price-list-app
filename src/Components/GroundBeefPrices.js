import groundBeef from '../img/groundBeef.jpeg'
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { groundBeefList } from '../shared/groundbeef';

groundBeefList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const GroundBeefPrices = () => {
    return (
      <div>
        <h2> GroundBeef Prices</h2>
        <Row noGutters>
          {groundBeefList.map(groundbeef => (
            <Col key={groundbeef.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='GroundBeef'
                src={groundBeef}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {groundbeef.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {groundbeef.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {groundbeef.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {groundbeef.LowestPrice}</CardText>
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

  export default GroundBeefPrices;