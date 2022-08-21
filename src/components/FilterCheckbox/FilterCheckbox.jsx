import React from 'react';
import './filterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='tumbler'>
      <label className='tumbler__label' htmlFor='short-tumbler'>
        <input className='tumbler__checkbox' id='short-tumbler' type='checkbox' />
        <span className='tumbler__graphic' />
      </label>
      <p className='tumbler__caption'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
