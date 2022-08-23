import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';
import constants from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function Register() {
  const registerData = constants.REGISTER_FORM;

  const onSubmit = async (values) => {
    try {
      const data = await mainApi.signUp(values);
      console.log(data);
    } catch (e) {
      switch (e.message) {
        case '409': {
          console.log('Пользователь с таким email уже существует.');
          break;
        }
        case '400': {
          console.log('При обновлении профиля произошла ошибка.');
          break;
        }
        default: {
          console.log(e);
          console.log('На сервере произошла ошибка.');
        }
      }
    }
  };

  return (
    <main className='register'>
      <NavLink to='/' className='register__link'>
        <img src={logo} alt='Логотип: зеленый кружок' className='register__logo' />
      </NavLink>
      <Form formData={registerData} className='register__form' onSubmit={onSubmit} />
    </main>
  );
}

export default Register;
