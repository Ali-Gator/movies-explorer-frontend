import { useCallback, useEffect, useState } from 'react';
import constants from './constants';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameRegExp = /[^a-z\- а-яё]/gi;
  const emailRegExp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (event) => {
    const { target } = event;
    const { name, value, validationMessage } = target;

    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());
    setErrors({ ...errors, [name]: validationMessage });
    if (name === 'name' && nameRegExp.test(value) && !validationMessage) {
      setErrors({
        ...errors,
        [name]: constants.MESSAGE.NAME_ERR
      });
    }
    if (name === 'email' && !emailRegExp.test(value) && !validationMessage) {
      setErrors({
        ...errors,
        [name]: constants.MESSAGE.EMAIL_ERR
      });
      setIsValid(false);
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export const filterMovies = (moviesArr, searchString, isShorts) => {
  return moviesArr.filter((movie) => {
    const isInRussian = movie.nameRU?.toLowerCase().includes(searchString);
    const isInEnglish = movie.nameEN?.toLowerCase().includes(searchString);
    if (isShorts) {
      return movie.duration <= constants.MINUTES_SHORTS && (isInRussian || isInEnglish);
    }
    return isInRussian || isInEnglish;
  });
};

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    let resizeTimeout;

    function resizeThrottler(e) {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handler(e);
        }, 66);
      }
    }

    window.addEventListener(event, resizeThrottler, passive);

    return () => {
      window.removeEventListener(event, resizeThrottler);
    };
  });
};

export const calculateMoviesToRender = (initMovies, width) => {
  if (width > 1100) {
    return initMovies.slice(0, constants.INIT_MOVIES_DESKTOP);
  }
  if (width < 1100 && width > 550) {
    return initMovies.slice(0, constants.INIT_MOVIES_TABLET);
  }
  return initMovies.slice(0, constants.INIT_MOVIES_PHONE);
};

export const calculateAddMovies = (initMovies, renderedMovies, width) => {
  const beginIndex = renderedMovies.length;
  if (width > 1100) {
    return initMovies.slice(beginIndex, beginIndex + constants.ADD_MOVIES_DESKTOP);
  }
  return initMovies.slice(beginIndex, beginIndex + constants.ADD_MOVIES_TABLET);
};

export const checkIsSavedMovies = (initMovies, savedMovies) => {
  const checkedMovies = [];
  initMovies.forEach((initMovie) => {
    const savedMovie = savedMovies.find((movie) => initMovie.id === movie.movieId);
    if (savedMovie) {
      checkedMovies.push({
        ...initMovie,
        status: constants.STATUS_LIKED,
        mongoId: savedMovie._id
      });
    } else {
      checkedMovies.push(initMovie);
    }
  });
  return checkedMovies;
};

export const formattedDuration = (time) => {
  if (time >= constants.MINUTES_PER_HOUR) {
    return `${(time / constants.MINUTES_PER_HOUR).toFixed()}ч ${
      time % constants.MINUTES_PER_HOUR
    }м`;
  }
  return `${time}м`;
};
