import React from 'react';
import './filterCheckbox.css';

function FilterCheckbox({ isShorts, setIsShorts }) {
  return (
    <div className='tumbler'>
      <label className='tumbler__label' htmlFor='short-tumbler'>
        <input
          className='tumbler__checkbox'
          id='short-tumbler'
          name='shorts'
          type='checkbox'
          checked={isShorts}
          onChange={() => setIsShorts(!isShorts)}
        />
        <span className='tumbler__graphic' />
      </label>
      <p className='tumbler__caption'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
