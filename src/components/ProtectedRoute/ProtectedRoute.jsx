import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import constants from '../../utils/constants';

function ProtectedRoute({ redirectPath = '/signin' }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const { user, setUser } = useContext(CurrentUserContext);

  useEffect(() => {
    (async () => {
      if (!user.email) {
        const token = localStorage.getItem(constants.STORAGE.JWT);
        if (token) {
          const userInfo = await mainApi.getUserInfo(token);
          setUser(userInfo);
        }
        setShowPreloader(false);
      }
    })();
  }, []);

  if (user.email) {
    return <Outlet />;
  }

  if (showPreloader) {
    return <Preloader />;
  }

  return <Navigate to={redirectPath} replace />;
}

export default ProtectedRoute;
