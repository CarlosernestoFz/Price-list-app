import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

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
        <Row className="chicken-container">
          {ChickensList.map(chicken => (
            <Col key={chicken.id} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
              <Card className="chicken-item">
                <CardBody>
                  <CardTitle tag="h5">Name: {chicken.name}</CardTitle>
                  <CardText>Regular Price: {chicken.RegularPrice}</CardText>
                  <CardText>Location: {chicken.Location}</CardText>
                  <CardText>Lowest Price: {chicken.LowestPrice}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  

export default ChickenPrices;