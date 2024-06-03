import { useState } from "react";
import "./data.css";

const Data = (props) => {
    const {item,getImg,getName,getDescription} = props

    const handleClick = () => {
        getImg(item.image);
        getName(item.movieName);
        getDescription(item.description);
      };

    return(
        <div className="choice" onClick={handleClick}>
            <div className="rela">
                <img src={item.image}></img>
                <div className="ep">
                    <div className="overlay"></div>
                    <p className="up">Episode {item.episode}</p>
                </div>
                <p className="down">{item.movieName}</p>
            </div>
        </div>
    )
}


export default Data