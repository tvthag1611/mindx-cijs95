import React from 'react';
import AnimeItem from './AnimeItem';

const AnimeList = ({ animeShows }) => {
  return (
    <ul>
      {animeShows.map((animeShow) => (
        <AnimeItem key={animeShow.id} animeShow={animeShow} />
      ))}
    </ul>
  );
};

export default AnimeList;