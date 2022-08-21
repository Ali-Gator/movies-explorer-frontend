import React from 'react';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className='movies'>
      <Header isInner />
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
      {false && <Preloader />}
    </div>
  );
}

export default Movies;
