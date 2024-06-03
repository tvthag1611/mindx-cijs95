import React from "react";

const MovieDetail = ({ movie }) => {
  if (!movie) return <div>Select a movie to see details</div>;

  return (
    <div>
      <h2>{movie.movieName}</h2>
      <p>{movie.description}</p>
      <img src={movie.image} alt={movie.movieName} />
    </div>
  );
};

export default MovieDetail;
