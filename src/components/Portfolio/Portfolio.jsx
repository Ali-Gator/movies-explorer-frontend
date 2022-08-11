import React from 'react';
import { NavLink } from 'react-router-dom';
import './portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li>
          <NavLink to='/signup' className='portfolio__item'>
            Статичный сайт
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' className='portfolio__item'>
            Адаптивный сайт
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' className='portfolio__item'>
            Одностраничное приложение
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
