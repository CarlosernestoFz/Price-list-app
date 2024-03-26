import Chicken from '../img/Chickenbreast.jpg';
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

const ChickensList = [
    {
        id: 0,
        name: 'ChickenBreast',
        RegularPrice: '11$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 1,
        name: 'ChickenBreast',
        RegularPrice: '15$/Kg',
        Location: 'SafeWay',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 2,
        name: 'ChickenBreast',
        RegularPrice: '17$/Kg',
        Location: 'SafeOnFood',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 3,
        name: 'ChickenBreast',
        RegularPrice: '14.55$/Kg',
        Location: 'SuperStore',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 4,
        name: 'ChickenBreast',
        RegularPrice: '15.99$/Kg',
        Location: 'Costco',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 5,
        name: 'ChickenBreast',
        RegularPrice: '12.99$/Kg',
        Location: 'NoFrill',
        LowestPrice: '9.99$/Kg'

    }
]

ChickensList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const ChickenPrices = () => {
    return (
      <div>
        <h2>Chicken Prices</h2>
        <Row noGutters>
          {ChickensList.map(chickenbreast => (
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