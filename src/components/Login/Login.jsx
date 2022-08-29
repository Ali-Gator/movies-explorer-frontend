import React, { useContext, useState } from 'react';
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';
import constants from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(CurrentUserContext);
  const formData = constants.LOGIN_FORM;

  const onSubmit = async (values) => {
    try {
      const { token } = await mainApi.signIn(values);
      localStorage.setItem('jwt', token);
      const user = await mainApi.getUserInfo(token);
      setUser(user);
      navigate('/movies', { replace: true });
    } catch (e) {
      switch (e.message) {
        case '401': {
          setErrorMessage(constants.MESSAGE.WRONG_LOGIN_PASSWORD);
          break;
        }
        default: {
          setErrorMessage(constants.MESSAGE.SERVER_ERR);
        }
      }
    }
  };

  return (
    <main className='login'>
      <NavLink to='/' className='login__link'>
        <img src={logo} alt='Логотип: зеленый кружок' className='login__logo' />
      </NavLink>
      <Form
        formData={formData}
        className='login__form'
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />
    </main>
  );
}

export default Login;
