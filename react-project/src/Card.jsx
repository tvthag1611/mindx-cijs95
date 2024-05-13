/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Card.css'

const Card = (props) => {
    const {list, setList, item, index} = props;

    const [name, setName] = useState(item.name);

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
            <img className='card-image' src={item.image} alt={item.name} />
            <div className='card-info'>
                <p className='card-no'>#{item.no}</p>
                <h2 className='card-name'>{item.name}</h2>
                <div className='card-attribute'>
                    {
                        item.arr.map((item, index) => {
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
                <hr />
                <input type='text' placeholder='Ten' className='card-input' value={name} onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                }/>
                <button className='card-button' onClick={() => {
                    list[index].name = name;
                    setList([...list]);
                }}>Thay đổi</button>
            </div>
        </div>
    )
}

export default Card
