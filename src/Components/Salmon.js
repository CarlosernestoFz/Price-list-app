import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { SalmonList } from '../shared/salmon';


SalmonList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const SalmonPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {SalmonList.map(salmon => (
            <Col key={salmon.id} xs={12} sm= {6} md={4} lg={2}>
              <Card 
              style= {{
                height: '100%', display: 'flex', flexDirection:'column'
              }}>
                <img 
                alt='chickenbreast'
                src={Chicken}
                />
                <CardBody>
                    <CardTitle tag="h5">Name: {salmon.name}</CardTitle>
                   <CardText> Information </CardText>
                </CardBody>
                  <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                       <CardText>Regular Price: {salmon.RegularPrice}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Location: {salmon.Location}</CardText>
                    </ListGroupItem>
                    <ListGroupItem>
                       <CardText>Lowest Price: {salmon.LowestPrice}</CardText>
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
  

export default SalmonPrices;