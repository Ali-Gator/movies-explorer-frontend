import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.svg';

function Header({ isAuth = false }) {
  return (
    <header className={`header ${isAuth && 'header_inner'}`}>
      <NavLink to='/'>
        <img className='header__logo' alt='Логотип: зеленая снежинка' src={logo} />
      </NavLink>
      <nav className='header__nav'>
        {isAuth ? (
          <>
            <input id='header__menu-toggle' type='checkbox' className='header__menu-toggle' />
            <label className='header__menu-btn' htmlFor='header__menu-toggle'>
              <span className='header__menu-icon' />
            </label>
            <ul className='header__nav-list header__nav-list_inner'>
              <li className='header__nav-item header__nav-item_inner header__nav-item_hidable'>
                <NavLink to='/' className='header__link header__link_inner link'>
                  Главная
                </NavLink>
              </li>
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
                <NavLink
                  to='/signup'
                  className='header__link header__link_inner header__nav-item_last link'
                >
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </>
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
