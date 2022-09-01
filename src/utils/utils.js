import { useCallback, useState } from 'react';
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
