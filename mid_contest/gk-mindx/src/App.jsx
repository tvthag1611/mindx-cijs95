import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderNavBar from "./components/HeaderNavBar";
import { data } from "./data.js";
import CardComponent from "./components/CardComponent.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  const [film, setFilm] = useState(data[0]);

  const changeFilm = (data) => {
    setFilm(data);
  };

  return (
    <div
      style={{
        backgroundColor: "#192026",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          padding: "15px 83px",
          // backgroundColor: "#192026",
          width: "100%",
        }}
      >
        <HeaderNavBar />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginTop: "30px",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "white" }}>Explore</h2>
          <div style={{ color: "#868686", fontSize: "22px" }}>
            What are you gonna watch today ?
          </div>
          <Detail data={film} />
        </div>
        <div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            New Release
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "100%",
              justifyContent: "space-between",
              // flexWrap: "wrap",
            }}
          >
            {data
              .filter((item) => {
                return item.id !== film.id;
              })
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      changeFilm(item);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <CardComponent data={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
