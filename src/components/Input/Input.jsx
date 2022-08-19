import React from 'react';
import './input.css';

function Input({ data }) {
  const { id, label, type, error } = data;
  return (
    <div className='input'>
      <label htmlFor={id} className='input__label'>
        {label}
      </label>
      <input className='input__field' type={type} id={id} value='Виталий' />
      {error && <p className='input__error'>{error}</p>}
    </div>
  );
}

export default Input;
