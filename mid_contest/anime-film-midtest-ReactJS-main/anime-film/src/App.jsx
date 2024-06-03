import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Card from "./components/Card/Card.jsx";
import "./App.css";
import { DATA } from "./data.js";
import "./components/Card/Card.css";

const filteredData = DATA.slice(1);

function App() {
  const [itemCard, setItemCard] = useState(filteredData);
  const [selectedItem, setSelectedItem] = useState(DATA[0]);
  const [showBanner1, setShowBanner1] = useState(true);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowBanner1(false);
  };
  return (
    <>
      <Header />

      <h2>Explore</h2>
      <p className="what">What are you gonna watch today?</p>
      {selectedItem && (
        <Banner
          type={"banner1"}
          image={selectedItem.image}
          movieName={selectedItem.movieName}
          description={selectedItem.description}
          item={selectedItem}
        />
      )}

      <section className="new-release">
        <h2>New Release</h2>
        <ul>
          {itemCard.map((item) => (
            <Card {...item} onSelected={handleCardClick} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
