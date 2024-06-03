import Card from "./Card.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ListPokemon() {
  const [list, setList] = useState([]);

  const [listPokemon, setlistPokemon] = useState([]);

  const fetchApiListPokemon = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    setlistPokemon(res.data.results);
  };

  console.log(listPokemon);
  // useEffect(() => {
  //   fetchApiListPokemon();
  // }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameCard, setNameCard] = useState("");
  const [index, setIndex] = useState(0);

  const [searchName, setSearchName] = useState("");
  const [searchAtr, setSearchAtr] = useState("all");

  const [paramsSearch, setParamsSearch] = useState({
    name: "",
    atr: "all",
  });

  const getNameCard = (name) => {
    setNameCard(name);
  };

  const getIndexCard = (index) => {
    setIndex(index);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const onAdd = () => {
    const newCard = {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
      name: searchName,
      no: list.length + 1 + "",
      arr: [searchAtr],
    };
    const newList = [...list];
    newList.unshift(newCard);
    setList(newList);
  };

  /**
   *   ? : true false
   *   && true
   *   || false
   *   ?? undefinded or null
   */

  // const obj = {
  //   name: "123",
  //   age: 18,
  // };

  // console.log(obj?.description);

  useEffect(() => {
    /////////////
    if (list?.length < cardList?.length) {
      alert("Xoa thành công");
    }
  }, [list]);

  /**
   * useEffect chạy component render, re-render
   * Trường hợp ko có [] chạy suốt
   * Trường hợp có [] chạy 1 lần
   * Trường hợp có [list] chạy khi list thay đổi
   * kiểu gì nó cũng chạy lần đầu
   * Khi mà component bị xóa thì nó chạy lần cuối
   */

  // useEffect(() => {
  //   console.log("abc");

  //   setInterval(() => {}, 1000);

  //   return () => {
  //     // chạy lần cuối
  //     clearInterval();
  //   };
  // }, [list]);

  return (
    <div>
      <div>
        <h1>List Pokemon</h1>
        <input
          placeholder="Search tên"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <select
          value={searchAtr}
          onChange={(e) => {
            setSearchAtr(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="Grass">Grass</option>
          <option value="Poison">Poison</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Water">Water</option>
          <option value="Bug">Bug</option>
        </select>
        <button onClick={onAdd}>Add</button>
      </div>
      <hr />
      <div className="app">
        {list.map((card, index) => {
          return (
            <Card
              item={card}
              key={index} // unique key
              index={index}
              setIsOpen={setIsOpen}
              getNameCard={getNameCard}
              getIndexCard1234567={getIndexCard}
              list={list}
              setList={setList}
            />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Ten"
          className="card-input"
          value={nameCard}
          onChange={(e) => {
            setNameCard(e.target.value);
          }}
        />
        <button
          className="card-button"
          onClick={() => {
            list[index].name = nameCard;
            setList([...list]);
            setIsOpen(false);
          }}
        >
          Thay đổi
        </button>
      </Modal>
    </div>
  );
}

export default ListPokemon;
