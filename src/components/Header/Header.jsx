import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' alt='Логотип: зеленая снежинка' src={logo} />
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <NavLink to='/signup' className='header__link'>
              Регистрация
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/signin' className='header__link header__link_main'>
              Войти
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
