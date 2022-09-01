import React, { useContext, useEffect, useState } from 'react';
import './searchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import constants from '../../utils/constants';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';
import moviesApi from '../../utils/MoviesApi';

function SearchForm({ setInitMovies }) {
  const [querySearch, setQuerySearch] = useState('');
  const [isShorts, setIsShorts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { setTooltip } = useContext(InfoTooltipContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
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
      const movies = await moviesApi.getMovies();
      setInitMovies(movies);
      localStorage.setItem(
        constants.STORAGE.MOVIES_DATA,
        JSON.stringify({
          searchQuery,
          initialMovies: movies,
          isShortChecked
        })
      );
    } catch {
      setMessage(constants.MESSAGE.BEATFILM_ERR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const moviesData = localStorage.getItem(constants.STORAGE.MOVIES_DATA);
    if (moviesData) {
      const { searchQuery, initialMovies, isShortChecked } = JSON.parse(moviesData);
      setQuerySearch(searchQuery);
      setInitMovies(initialMovies);
      setIsShorts(isShortChecked);
    }
  }, []);

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
