import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InfoTooltipProvider from '../../contexts/InfoTooltipContext';
import CurrentUserProvider from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <InfoTooltipProvider>
      <CurrentUserProvider>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserProvider>
      <InfoTooltip />
    </InfoTooltipProvider>
  );
}

export default App;
