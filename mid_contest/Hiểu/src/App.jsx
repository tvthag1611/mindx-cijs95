import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { movies } from "./data";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <section>
          <h2>New Release</h2>
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </section>
        <section>
          <h2>Explore</h2>
          <MovieDetail movie={selectedMovie} />
        </section>
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default App;
