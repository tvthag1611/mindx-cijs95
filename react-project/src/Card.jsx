/* eslint-disable react/prop-types */
import './Card.css'

const Card = (props) => {
    
    const cardItem = props.item;

    const getColorByArrtribute = (attribute) => {
        switch (attribute) {
            case 'Grass':
                return {
                    color: 'black',
                    backgroundColor: 'green'
                }
            case 'Poison':
                return {
                    color: 'white',
                    backgroundColor: 'purple'
                }
            case 'Fire':
                return {
                    color: 'white',
                    backgroundColor: 'red'
                }
            case 'Flying':
                return {
                    color: 'white',
                    backgroundColor: 'blue'
                }
            case 'Water':
                return {
                    color: 'black',
                    backgroundColor: 'cyan'
                }
            default:
                return {
                    color: 'white',
                    backgroundColor: 'black'
                }
        }
    }

    // const getColorByArrtribute = (attribute) => {
    //     switch (attribute) {
    //         case 'Grass':
    //             return 'black'
    //         case 'Poison':
    //             return 'white'
    //         case 'Fire':
    //             return 'white'
    //         case 'Flying':
    //             return 'white'
    //         case 'Water':
    //             return 'black'
    //         default:
    //             return 'white'
    //     }
    // }
    
    return (
        <div className='card'>
            <img className='card-image' src={cardItem.image} alt={cardItem.name} />
            <div className='card-info'>
                <p className='card-no'>#{cardItem.no}</p>
                <h2 className='card-name'>{cardItem.name}</h2>
                <div className='card-attribute'>
                    {
                        cardItem.arr.map((item, index) => {
                            return (
                                <div
                                className='card-attribute-item'
                                key={index}
                                style={getColorByArrtribute(item)}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
