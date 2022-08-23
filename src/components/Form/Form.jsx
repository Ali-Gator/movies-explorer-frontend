import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Input/Input';
import './form.css';
import { useFormWithValidation } from '../../utils/utils';

function Form({ formData, className, onSubmit }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const { inputsData, title, buttonText, text, linkText, linkTo } = formData;

  const renderInputs = (inputs) => {
    return inputs.map((input) => (
      <Input inputData={input} key={input.id} onChange={handleChange} />
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('values', values);
    console.log('errors', errors);
    console.log('isValid', isValid);
    onSubmit(values);
  };

  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
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
        <button className='form__button button' type='submit'>
          {buttonText}
        </button>
        <p className='form__text'>
          {text}
          <NavLink to={linkTo} className='form__link link'>
            {linkText}
          </NavLink>
        </p>
      </div>
    </form>
  );
}

export default Form;
