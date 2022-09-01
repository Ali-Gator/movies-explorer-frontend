import React, { useEffect, useState } from 'react';
import './moviesCardList.css';
import moviesApi from '../../utils/MoviesApi';

function MoviesCardList({ moviesToShow }) {
  // const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  console.log('movies: ', moviesToShow);
  // console.log(moviesApi.getMovies());

  useEffect(() => {
    (async () => {
      // const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');
      // const movies = await res.json();
      // const samples = new Array(5).fill(movies[0]);
      // setMovieData(samples);
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
        {/* {movieData && */}
        {/*  movieData.map((movie) => ( */}
        {/*    <MoviesCard */}
        {/*      imageUrl={`https://api.nomoreparties.co/${movie.image.url}`} */}
        {/*      title={movie.nameRU} */}
        {/*      duration={movie.duration} */}
        {/*    /> */}
        {/*  ))} */}
        {error && <p className='card-list__message'>{error}</p>}
      </div>
      <button className='card-list__button button' type='button'>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
