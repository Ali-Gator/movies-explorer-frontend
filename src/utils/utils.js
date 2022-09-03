import { useCallback, useEffect, useState } from 'react';
import constants from './constants';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameRegExp = /[^a-z\- а-яё]/gi;

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
      return movie.duration <= 40 && (isInRussian || isInEnglish);
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
    return initMovies.slice(0, 16);
  }
  if (width < 1100 && width > 550) {
    return initMovies.slice(0, 8);
  }
  return initMovies.slice(0, 5);
};

export const calculateAddMovies = (initMovies, renderedMovies, width) => {
  const beginIndex = renderedMovies.length;
  if (width > 1100) {
    return initMovies.slice(beginIndex, beginIndex + 4);
  }
  return initMovies.slice(beginIndex, beginIndex + 2);
};

export const checkIsSavedMovies = (initMovies, savedMovies) => {
  const checkedMovies = [];
  initMovies.forEach((initMovie) => {
    const savedMovie = savedMovies.find((movie) => initMovie.id === movie.movieId);
    if (savedMovie) {
      checkedMovies.push({
        ...initMovie,
        status: 'liked',
        mongoId: savedMovie._id
      });
    } else {
      checkedMovies.push(initMovie);
    }
  });
  return checkedMovies;
};

export const formattedDuration = (time) => {
  if (time >= 60) {
    return `${(time / 60).toFixed()}ч ${time % 60}м`;
  }
  return `${time}м`;
};
