import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const GroundBeefsList = [
    {
        id: 0,
        name: 'GroundBeef',
        RegularPrice: '11$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 1,
        name: 'GroundBeef',
        RegularPrice: '15$/Kg',
        Location: 'SafeWay',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 2,
        name: 'GroundBeef',
        RegularPrice: '17$/Kg',
        Location: 'SafeOnFood',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 3,
        name: 'GroundBeef',
        RegularPrice: '14.55$/Kg',
        Location: 'SuperStore',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 4,
        name: 'GroundBeef',
        RegularPrice: '15.99$/Kg',
        Location: 'Costco',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 5,
        name: 'GroundBeef',
        RegularPrice: '12.99$/Kg',
        Location: 'NoFrill',
        LowestPrice: '9.99$/Kg'

    }
]

GroundBeefsList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const GroundBeefPrices = () => {
    return (
      <div>
        <h2>GroundBeef Prices</h2>
        <Row>
          {GroundBeefsList.map(groundbeef => (
            <Col key={groundbeef.id}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Name: {groundbeef.name}</CardTitle>
                  <CardText>Regular Price: {groundbeef.RegularPrice}</CardText>
                  <CardText>Location: {groundbeef.Location}</CardText>
                  <CardText>Lowest Price: {groundbeef.LowestPrice}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  export default GroundBeefPrices;