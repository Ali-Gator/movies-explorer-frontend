import React, { useContext, useState } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import constants from '../../utils/constants';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';

function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState('');
  const { user, setUser } = useContext(CurrentUserContext);
  const { setTooltip } = useContext(InfoTooltipContext);
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleExit = () => {
    localStorage.clear();
    setUser(null);
    navigate('/', { replace: true });
  };

  const isValuesSame = () => {
    const newValues = Object.entries(values);
    return newValues.length === 0 || newValues.every((arr) => user[arr[0]] === arr[1]);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const token = localStorage.getItem(constants.STORAGE.JWT);
      const newUser = {
        name: values.name || user.name,
        email: values.email || user.email
      };
      const userData = await mainApi.patchCurrentUser(token, newUser);
      setUser(userData);
      setMessage('');
      setIsEditable(false);
      setTooltip({
        message: constants.MESSAGE.EDIT_PROFILE,
        type: constants.MESSAGE_TYPE.OK
      });
    } catch (e) {
      switch (e.message) {
        case '409': {
          setMessage(constants.MESSAGE.CONFLICT_USER);
          break;
        }
        case '400': {
          setMessage(constants.MESSAGE.REGISTER_ERR);
          break;
        }
        default: {
          setMessage(constants.MESSAGE.SERVER_ERR);
        }
      }
    }
  };

  return (
    <div className='profile'>
      <Header />
      <main>
        <form className='profile-form' onSubmit={handleSubmit}>
          <h2 className='profile-form__title'>{`Привет, ${user.name}!`}</h2>
          <div className='profile-form__input-wrapper'>
            <label htmlFor='name' className='profile-form__label'>
              Имя
            </label>
            <input
              type='text'
              className='profile-form__input'
              id='name'
              name='name'
              placeholder='Введите имя'
              required
              onChange={handleChange}
              value={!isEditable ? user.name : undefined}
              disabled={!isEditable}
            />
          </div>
          {errors.name && <p className='profile-form__input-error'>{errors.name}</p>}
          <div className='profile-form__input-wrapper'>
            <label htmlFor='email' className='profile-form__label'>
              E-mail
            </label>
            <input
              type='email'
              className='profile-form__input'
              id='email'
              name='email'
              placeholder='Введите email'
              required
              onChange={handleChange}
              value={!isEditable ? user.email : undefined}
              disabled={!isEditable}
            />
          </div>
          {errors.email && <p className='profile-form__input-error'>{errors.email}</p>}
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
            {message && <p className='profile-form__error'>{message}</p>}
            {isEditable && (
              <button
                className='profile-form__button button profile-form__button_type_save'
                type='submit'
                disabled={isValuesSame() || !isValid}
              >
                Сохранить
              </button>
            )}
            {!isEditable && (
              <button
                type='submit'
                className='profile-form__button button profile-form__button_type_exit'
                onClick={handleExit}
              >
                Выйти из аккаунта
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default Profile;
