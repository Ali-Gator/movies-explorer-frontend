import React from 'react';
import './searchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__input-wrapper'>
        <input className='search-form__input' id='movie' type='text' placeholder='Фильм' />
        <button
          className='search-form__button button'
          id='search-button'
          type='submit'
          aria-label='Find movie'
        />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
