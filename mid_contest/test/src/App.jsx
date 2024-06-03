import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AnimeList from "./AnimeList";

const App = () => {
  const [animeShows, setAnimeShows] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  // const handleSearch = (query) => {
  //   query
  //   setAnimeShows
  //   searchQuery
  //   setSearchQuery
  // };

  return (
    <div>
      <Header />
      <SearchBar />
      <AnimeList animeShows={animeShows} />
    </div>
  );
};

export default App;
