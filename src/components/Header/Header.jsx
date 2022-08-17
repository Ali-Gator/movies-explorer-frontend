import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.svg';

function Header({ isAuth = false }) {
  return (
    <header className={`header ${isAuth && 'header_inner'}`}>
      <img className='header__logo' alt='Логотип: зеленая снежинка' src={logo} />
      <nav className='header__nav'>
        {isAuth ? (
          <ul className='header__nav-list'>
            <li className='header__nav-item header__nav-item_inner'>
              <NavLink
                to='/signup'
                className='header__link header__link_inner header__link_inner-active link'
              >
                Фильмы
              </NavLink>
            </li>
            <li className='header__nav-item header__nav-item_inner'>
              <NavLink to='/signup' className='header__link header__link_inner link'>
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className='header__nav-item header__nav-item_inner'>
              <NavLink to='/signup' className='header__link header__link_inner link'>
                Аккаунт
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <NavLink to='/signup' className='header__link link'>
                Регистрация
              </NavLink>
            </li>
            <li className='header__nav-item'>
              <NavLink to='/signin' className='header__link link'>
                Войти
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
