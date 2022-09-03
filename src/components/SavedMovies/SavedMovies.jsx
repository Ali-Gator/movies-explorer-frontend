import React, { useState } from 'react';
import './savedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const [moviesToShow, setMoviesToShow] = useState(null);

  return (
    <div className='saved-movies'>
      <Header />
      <main>
        <SearchForm setMoviesToShow={setMoviesToShow} />
        <MoviesCardList moviesToShow={moviesToShow} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
