import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const TopSirLoinCapList = [
    {
        id: 0,
        name: 'TopSirloinCap',
        RegularPrice: '17.89$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 1,
        name:'TopSirloinCap',
        RegularPrice: '21$/Kg',
        Location: 'SafeWay',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 2,
        name: 'TopSirloinCap',
        RegularPrice: '17$/Kg',
        Location: 'SafeOnFood',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 3,
        name: 'TopSirloinCap',
        RegularPrice: '20.55$/Kg',
        Location: 'SuperStore',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 4,
        name: 'TopSirloinCap',
        RegularPrice: '17.99$/Kg',
        Location: 'Costco',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 5,
        name: 'TopSirloinCap',
        RegularPrice: '18.99$/Kg',
        Location: 'NoFrill',
        LowestPrice: '9.99$/Kg'

    }
]

TopSirLoinCapList.sort((a, b) => parseFloat(a.RegularPrice) - parseFloat(b.RegularPrice));

const TopSirloinCapPrices = () => {
    return (
      <div>
        <h2>TopSirloinCap Prices</h2>
        <Row>
          {TopSirLoinCapList.map(topsirloincap => (
            <Col key={topsirloincap.id}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Name: {topsirloincap.name}</CardTitle>
                  <CardText>Regular Price: {topsirloincap.RegularPrice}</CardText>
                  <CardText>Location: {topsirloincap.Location}</CardText>
                  <CardText>Lowest Price: {topsirloincap.LowestPrice}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  export default TopSirloinCapPrices;