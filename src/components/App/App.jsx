import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
    </Routes>
  );
}

export default App;
