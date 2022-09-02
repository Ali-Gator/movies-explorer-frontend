import React, { useContext, useEffect } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import constants from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function App() {
  const { user, setUser } = useContext(CurrentUserContext);

  useEffect(() => {
    (async () => {
      if (!user.email) {
        const token = localStorage.getItem(constants.STORAGE.JWT);
        if (token) {
          const userInfo = await mainApi.getUserInfo(token);
          setUser(userInfo);
        }
      }
    })();
  }, []);

  return (
    <InfoTooltipProvider>
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
      <InfoTooltip />
    </InfoTooltipProvider>
  );
}

export default App;
