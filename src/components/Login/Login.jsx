import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';

function Login() {
  const formData = {
    title: 'Рады видеть!',
    buttonText: 'Войти',
    text: 'Ещё не зарегистрированы?',
    linkText: 'Регистрация',
    linkTo: '/signup',
    inputsData: [
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
        error: ''
      }
    ]
  };

  return (
    <div className='login'>
      <NavLink to='/' className='login__link'>
        <img src={logo} alt='Логотип: зеленый кружок' className='login__logo' />
      </NavLink>
      <Form formData={formData} className='login__form' />
    </div>
  );
}

export default Login;
