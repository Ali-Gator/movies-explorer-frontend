import React, { useState } from 'react';
import Header from '../Header/Header';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  const [initMovies, setInitMovies] = useState([]);

  return (
    <div className='movies'>
      <Header />
      <main>
        <SearchForm setInitMovies={setInitMovies} />
        <MoviesCardList initMovies={initMovies} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
