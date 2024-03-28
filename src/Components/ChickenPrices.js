import Chicken from '../img/Chickenbreast.jpg';
import { ChickenBreastList } from '../shared/chickenBreast';
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';


ChickenBreastList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const ChickenPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {ChickenBreastList.map(chickenbreast => (
            <Col key={chickenbreast.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='chickenbreast'
                src={Chicken}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {chickenbreast.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {chickenbreast.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {chickenbreast.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {chickenbreast.LowestPrice}</CardText>
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
  

export default ChickenPrices;