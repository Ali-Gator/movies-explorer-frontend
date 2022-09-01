import React, { useState } from 'react';
import Header from '../Header/Header';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  const [moviesToShow, setMoviesToShow] = useState([]);

  return (
    <div className='movies'>
      <Header />
      <main>
        <SearchForm setMoviesToShow={setMoviesToShow} />
        <MoviesCardList moviesToShow={moviesToShow} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
