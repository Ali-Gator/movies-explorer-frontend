import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Input/Input';
import './form.css';

function Form({ formData, className }) {
  const { inputsData, title, buttonText, text, linkText, linkTo } = formData;

  const renderInputs = (inputs) => {
    return inputs.map((input) => <Input data={input} key={input.id} />);
  };

  return (
    <div className={`form ${className}`}>
      <h2 className='form__title'>{title}</h2>
      <div className='form__inputs-wrapper'>{renderInputs(inputsData)}</div>
      <div
        className={`form__button__wrapper 
        ${
          inputsData.length === 3
            ? 'form__button__wrapper_type_near'
            : 'form__button__wrapper_type_far'
        }`}
      >
        <button className='form__button button' type='button'>
          {buttonText}
        </button>
        <p className='form__text'>
          {text}
          <NavLink to={linkTo} className='form__link link'>
            {linkText}
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Form;
