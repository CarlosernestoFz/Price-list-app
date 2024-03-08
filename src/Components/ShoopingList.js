
const ProteinList = ({ name, RegularPrice, Location, LowestPrice}) => (
    <div>
        <h2>{name}</h2>
        <p>Regular Price: {RegularPrice}</p>
        <p>Location: {Location}</p>
        <p>Lowest Price: {LowestPrice}</p>
    </div>
)


const ShoopingList = [
    {
        id: 0,
        name: 'ChickenBreast',
        RegularPrice: '12$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 1,
        name: 'GroundBeef80/20',
        RegularPrice: '16$/Kg',
        Location: 'Walmart',
        LowestPrice: '8.99$/Kg'

    },
    {
        id: 2,
        name: 'ChickenLegs',
        RegularPrice: '10$/Kg',
        Location: 'Walmart',
        LowestPrice: '7.99$/Kg'

    },
    {
        id: 3,
        name: 'ChickenWings',
        RegularPrice: '11$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 4,
        name: 'PorkLoin',
        RegularPrice: '11.50$/Kg',
        Location: 'Walmart',
        LowestPrice: '9.99$/Kg'

    },
    {
        id: 6,
        name: 'Steak',
        RegularPrice: '19$/Kg',
        Location: 'Walmart',
        LowestPrice: '12.99$/Kg'

    }
]

const ShoopingListDisplay = () => (
    <div>
        {ShoopingList.map(item => (
            <ProteinList key={item.id} {...item} />
        
        ))}
    </div>
)

export default ShoopingListDisplay