/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({
  item,
  index,
  setIsOpen,
  getNameCard,
  getIndexCard1234567,
  list,
  setList,
}) => {
  const getColorByArrtribute = (attribute) => {
    switch (attribute) {
      case "Grass":
        return {
          color: "black",
          backgroundColor: "green",
        };
      case "Poison":
        return {
          color: "white",
          backgroundColor: "purple",
        };
      case "Fire":
        return {
          color: "white",
          backgroundColor: "red",
        };
      case "Flying":
        return {
          color: "white",
          backgroundColor: "blue",
        };
      case "Water":
        return {
          color: "black",
          backgroundColor: "cyan",
        };
      default:
        return {
          color: "white",
          backgroundColor: "black",
        };
    }
  };

  const handleClick = () => {
    setIsOpen(true);
    getNameCard(item.name);
    getIndexCard1234567(index);
  };

  const onDelete = () => {
    const newList = list.filter((itemList) => itemList.no !== item.no);
    setList(newList);
  };

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/pokemons/${item.no}`);
      }}
    >
      <img className="card-image" src={item.image} alt={item.name} />
      <div className="card-info">
        <p className="card-no">#{item.no}</p>
        <h2 className="card-name">{item.name}</h2>
        <div className="card-attribute">
          {item.arr?.map((item, index) => {
            return (
              <div
                className="card-attribute-item"
                key={index}
                style={getColorByArrtribute(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <button className="card-attribute-item" onClick={onDelete}>
          Xoa
        </button>
      </div>
    </div>
  );
};

export default Card;
