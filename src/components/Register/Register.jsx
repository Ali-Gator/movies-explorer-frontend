import React, { useState } from 'react';
import './register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';
import constants from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const registerData = constants.REGISTER_FORM;

  const onSubmit = async (values) => {
    try {
      const data = await mainApi.signUp(values);
      console.log(data);
      navigate('/movies', { replace: true });
    } catch (e) {
      switch (e.message) {
        case '409': {
          setErrorMessage(constants.MESSAGE.CONFLICT_USER);
          break;
        }
        case '400': {
          setErrorMessage(constants.MESSAGE.REGISTER_ERR);
          break;
        }
        default: {
          setErrorMessage(constants.MESSAGE.SERVER_ERR);
        }
      }
    }
  };

  // const renderInputs

  return (
    <main className='register'>
      <NavLink to='/' className='register__link'>
        <img src={logo} alt='Логотип: зеленый кружок' className='register__logo' />
      </NavLink>
      <Form
        formData={registerData}
        errorMessage={errorMessage}
        className='register__form'
        onSubmit={onSubmit}
      />
    </main>
  );
}

export default Register;
