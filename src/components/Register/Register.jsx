import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';

function Register() {
  const formData = {
    title: 'Добро пожаловать!',
    buttonText: 'Зарегистрироваться',
    text: 'Уже зарегистрированы?',
    linkText: 'Войти',
    linkTo: '/signin',
    inputsData: [
      {
        id: 'name',
        label: 'Имя',
        type: 'text',
        error: ''
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        error: ''
      },
      {
        id: 'password',
        label: 'Пароль',
        type: 'password',
        error: 'Что-то пошло не так...'
      }
    ]
  };

  return (
    <div className='register'>
      <NavLink to='/' className='register__link'>
        <img src={logo} alt='Логотип: зеленый кружок' className='register__logo' />
      </NavLink>
      <Form formData={formData} className='register__form' />
    </div>
  );
}

export default Register;
