import React from 'react';
import './filterCheckbox.css';
import constants from '../../utils/constants';

function FilterCheckbox({ isShorts, setIsShorts }) {
  const handleChange = () => {
    const savedValues = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
    localStorage.setItem(
      constants.STORAGE.MOVIES_DATA,
      JSON.stringify({ ...savedValues, isShortChecked: !isShorts })
    );
    setIsShorts(!isShorts);
  };

  return (
    <div className='tumbler'>
      <label className='tumbler__label' htmlFor='short-tumbler'>
        <input
          className='tumbler__checkbox'
          id='short-tumbler'
          name='shorts'
          type='checkbox'
          checked={isShorts}
          onChange={handleChange}
        />
        <span className='tumbler__graphic' />
      </label>
      <p className='tumbler__caption'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
