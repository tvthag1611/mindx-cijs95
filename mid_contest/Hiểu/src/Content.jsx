import React from 'react';

const Content = ({ movie }) => (
  <div className="content">
    {movie && (
      <div>
        <h2>{movie.movieName}</h2>
        <p>{movie.description}</p>
        <p>Episode: {movie.episode}</p>
        <img src={movie.image} alt={movie.movieName} />
      </div>
    )}
  </div>
);

export default Content;