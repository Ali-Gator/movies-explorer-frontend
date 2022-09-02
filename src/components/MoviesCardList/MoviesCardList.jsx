import React, { useEffect, useState } from 'react';
import './moviesCardList.css';
import moviesApi from '../../utils/MoviesApi';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesToShow }) {
  const [error, setError] = useState(null);
  console.log('movies: ', moviesToShow);

  useEffect(() => {
    (async () => {
      try {
        const initialMovies = await moviesApi.getMovies();
        return initialMovies;
      } catch (e) {
        console.log(e);
        setError(e.message);
        return 0;
      }
    })();
  }, []);

  return (
    <div className='card-list'>
      <div className='card-list__card-wrapper'>
        {moviesToShow &&
          moviesToShow.map((movie) => (
            <MoviesCard
              imageUrl={`https://api.nomoreparties.co/${movie.image.url}`}
              title={movie.nameRU}
              duration={movie.duration}
              key={movie.id}
            />
          ))}
        {error && <p className='card-list__message'>{error}</p>}
      </div>
      <button className='card-list__button button' type='button'>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
