import React, { useEffect, useState } from 'react';
import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');
      const movies = await res.json();
      const samples = new Array(8).fill(movies[0], 0, 16);
      setMovieData(samples);
    })();
  }, []);

  return (
    <div className='card-list'>
      <div className='card-list__card-wrapper'>
        {movieData &&
          movieData.map((movie) => (
            <MoviesCard
              imageUrl={`https://api.nomoreparties.co/${movie.image.url}`}
              title={movie.nameRU}
              duration={movie.duration}
            />
          ))}
      </div>
      <button className='card-list__button button' type='button'>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
