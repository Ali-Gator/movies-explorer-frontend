import React from 'react';
import './input.css';

function Input({ inputData, onChange }) {
  const { id, label, type, error } = inputData;
  return (
    <div className='input'>
      <label htmlFor={id} className='input__label'>
        {label}
      </label>
      <input
        className='input__field'
        required
        type={type}
        id={id}
        name={id}
        placeholder={`Введите ${label.toLowerCase()}`}
        onChange={onChange}
      />
      {error && <p className='input__error'>{error}</p>}
    </div>
  );
}

export default Input;
