import React, { useEffect, useState } from 'react';
import './moviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import constants from '../../utils/constants';
import { calculateAddMovies, calculateMoviesToRender, useEvent } from '../../utils/utils';

function MoviesCardList({ moviesToShow }) {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isSavedMovieLocation = useLocation().pathname === '/saved-movies';

  const handleShowMore = () => {
    setMoviesToRender((prevState) => [
      ...prevState,
      ...calculateAddMovies(moviesToShow, moviesToRender, screenWidth)
    ]);
  };

  useEvent('resize', (e) => setScreenWidth(e.target.innerWidth));

  useEffect(() => {
    if (moviesToShow !== null) {
      if (isSavedMovieLocation) {
        setMoviesToRender(moviesToShow);
      } else {
        setMoviesToRender(calculateMoviesToRender(moviesToShow, screenWidth));
      }
    }
  }, [screenWidth, moviesToShow]);
  return (
    <div className='card-list'>
      <div className='card-list__card-wrapper'>
        {moviesToRender &&
          moviesToRender.map((movie) => (
            <MoviesCard movie={movie} key={movie.id || movie.movieId} />
          ))}
        {moviesToShow?.length === 0 && moviesToShow !== null && (
          <p className='card-list__message'>{constants.MESSAGE.NO_MOVIE_FOUND}</p>
        )}
      </div>
      {moviesToRender.length < moviesToShow?.length && (
        <button className='card-list__button button' type='button' onClick={handleShowMore}>
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
