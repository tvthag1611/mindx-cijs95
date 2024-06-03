import React from 'react';

const MovieItem = ({ movie, onMovieClick }) => {
  return (
    <div onClick={() => onMovieClick(movie)}>
      <h3>{movie.movieName} (Ep. {movie.episode})</h3>
      <img src={movie.image} alt={movie.movieName} />
    </div>
  );
};

export default MovieItem;