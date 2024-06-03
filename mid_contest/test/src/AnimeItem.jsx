import React from 'react';

const AnimeItem = ({ animeShow }) => {
  return (
    <li>
      <h2>{animeShow.title}</h2>
      <p>Episode {animeShow.episodeNumber}</p>
    </li>
  );
};

export default AnimeItem;