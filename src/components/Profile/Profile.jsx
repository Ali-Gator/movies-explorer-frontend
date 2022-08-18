import React from 'react';
import './profile.css';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';

function Profile() {
  return (
    <div className='profile'>
      <Header isInner />
      <form className='profile-form'>
        <h2 className='profile-form__title'>Привет, Виталий!</h2>
        <div className='profile-form__input-wrapper'>
          <label htmlFor='name' className='profile-form__label'>
            Имя
          </label>
          <input type='text' className='profile-form__input' id='name' value='Виталий' />
        </div>
        <div className='profile-form__input-wrapper'>
          <label htmlFor='email' className='profile-form__label'>
            E-mail
          </label>
          <input type='email' className='profile-form__input' id='email' value='pochta@yandex.ru' />
        </div>
        <div className='profile-form__buttons-wrapper'>
          <button
            className='profile-form__button button profile-form__button_type_edit'
            type='button'
          >
            Редактировать
          </button>
          {false && (
            <button
              className='profile-form__button button profile-form__button_type_save'
              type='button'
            >
              Сохранить
            </button>
          )}
          {false && <p className='profile-form__error'>При обновлении профиля произошла ошибка.</p>}
          <NavLink to='/' className='profile-form__link link'>
            Выйти из аккаунта
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Profile;
