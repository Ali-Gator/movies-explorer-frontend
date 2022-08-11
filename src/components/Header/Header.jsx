import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' alt='Логотип: зеленая снежинка' src={logo} />
      <div className='header__auth'>
        <NavLink to='/signup' className='header__link'>
          Регистрация
        </NavLink>
        <NavLink to='/signin' className='header__link header__link_main'>
          Войти
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
