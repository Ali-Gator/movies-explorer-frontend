import React, { useContext, useEffect, useState } from 'react';
import './searchForm.css';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import constants from '../../utils/constants';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';
import moviesApi from '../../utils/MoviesApi';
import { checkIsSavedMovies, filterMovies } from '../../utils/utils';
import mainApi from '../../utils/MainApi';

function SearchForm({ setMoviesToShow }) {
  const [initMovies, setInitMovies] = useState(null);
  const [querySearch, setQuerySearch] = useState('');
  const [isShorts, setIsShorts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { setTooltip } = useContext(InfoTooltipContext);
  const isSavedMovieLocation = useLocation().pathname === '/saved-movies';

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setMessage('');
      const formValues = new FormData(e.target);
      const searchQuery = formValues.get('movie');
      const isShortChecked = formValues.get('shorts') === 'on';
      if (!searchQuery) {
        setTooltip({
          message: constants.MESSAGE.SEARCH_QUERY_ERR,
          type: constants.MESSAGE_TYPE.ERROR
        });
        return;
      }
      if (!isSavedMovieLocation) {
        const apiMovies = await moviesApi.getMovies();
        const savedMovies = await mainApi.getSavedMovies(
          localStorage.getItem(constants.STORAGE.JWT)
        );
        const checkedMovies = checkIsSavedMovies(apiMovies, savedMovies);
        setInitMovies([...checkedMovies]);
        localStorage.setItem(
          constants.STORAGE.MOVIES_DATA,
          JSON.stringify({
            searchQuery,
            initialMovies: checkedMovies,
            isShortChecked
          })
        );
      } else {
        setInitMovies([...initMovies]);
      }
      setQuerySearch(searchQuery);
      setIsShorts(isShortChecked);
    } catch {
      setMessage(constants.MESSAGE.BEATFILM_ERR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (isSavedMovieLocation) {
        const savedMovies = await mainApi.getSavedMovies(
          localStorage.getItem(constants.STORAGE.JWT)
        );
        setInitMovies(savedMovies);
      } else {
        const moviesData = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        if (moviesData?.initialMovies) {
          const { searchQuery, initialMovies, isShortChecked } = moviesData;
          setInitMovies(initialMovies);
          setQuerySearch(searchQuery);
          setIsShorts(isShortChecked);
        } else {
          setMessage(constants.MESSAGE.START_SEARCH);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (initMovies !== null) {
      const filteredMovies = filterMovies(initMovies, querySearch, isShorts);
      setMoviesToShow(filteredMovies);
    }
  }, [initMovies]);

  useEffect(() => {
    if (initMovies !== null) {
      if (isSavedMovieLocation) {
        const filteredMovies = filterMovies(initMovies, querySearch, isShorts);
        setMoviesToShow(filteredMovies);
      } else {
        const movieData = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        if (movieData?.initialMovies.length > 0) {
          const filteredMovies = filterMovies(movieData.initialMovies, querySearch, isShorts);
          setMoviesToShow(filteredMovies);
        }
      }
    }
  }, [isShorts]);

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form__input-wrapper'>
          <input
            className='search-form__input'
            id='movie'
            type='text'
            placeholder='Фильм'
            name='movie'
            defaultValue={querySearch}
          />
          <button
            className='search-form__button button'
            id='search-button'
            type='submit'
            aria-label='Find movie'
          />
        </div>
        <FilterCheckbox isShorts={isShorts} setIsShorts={setIsShorts} />
      </form>
      {isLoading && <Preloader />}
      {message && <p className='search-form__message'>{message}</p>}
    </>
  );
}

export default SearchForm;
