import React, { useContext, useState } from 'react';
import './profile.css';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const { user } = useContext(CurrentUserContext);
  const { handleChange } = useFormWithValidation();

  const handleEdit = () => {
    setIsEditable(true);
  };
  console.log(user);
  // const onSubmit = async (values) => {
  //   try {
  //     const { token } = await mainApi.signIn(values);
  //     localStorage.setItem('jwt', token);
  //     setUser(values.email);
  //     navigate('/movies', { replace: true });
  //   } catch (e) {
  //     switch (e.message) {
  //       case '401': {
  //         setErrorMessage(constants.MESSAGE.WRONG_LOGIN_PASSWORD);
  //         break;
  //       }
  //       default: {
  //         setErrorMessage(constants.MESSAGE.SERVER_ERR);
  //       }
  //     }
  //   }
  // };

  return (
    <div className='profile'>
      <Header isInner />
      <main>
        <form className='profile-form'>
          <h2 className='profile-form__title'>{`Привет, ${user.name}!`}</h2>
          <div className='profile-form__input-wrapper'>
            <label htmlFor='name' className='profile-form__label'>
              Имя
            </label>
            <input
              type='text'
              className='profile-form__input'
              id='name'
              placeholder='Введите имя'
              onChange={handleChange}
            />
          </div>
          <div className='profile-form__input-wrapper'>
            <label htmlFor='email' className='profile-form__label'>
              E-mail
            </label>
            <input
              type='email'
              className='profile-form__input'
              id='email'
              placeholder='Введите email'
              onChange={handleChange}
            />
          </div>
          <div className='profile-form__buttons-wrapper'>
            {!isEditable && (
              <button
                className='profile-form__button button profile-form__button_type_edit'
                type='button'
                onClick={handleEdit}
              >
                Редактировать
              </button>
            )}
            {false && (
              <p className='profile-form__error'>При обновлении профиля произошла ошибка.</p>
            )}
            {isEditable && (
              <button
                className='profile-form__button button profile-form__button_type_save'
                type='button'
              >
                Сохранить
              </button>
            )}
            {!isEditable && (
              <NavLink to='/' className='profile-form__link link'>
                Выйти из аккаунта
              </NavLink>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default Profile;
