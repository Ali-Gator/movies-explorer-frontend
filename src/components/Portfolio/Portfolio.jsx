import React from 'react';
import './portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li>
          <a className='portfolio__item link' href='https://ali-gator.github.io/portfolio/'>
            Статичный сайт
          </a>
        </li>
        <li>
          <a className='portfolio__item link' href='https://ali-gator.github.io/russian-travel/'>
            Адаптивный сайт
          </a>
        </li>
        <li>
          <a className='portfolio__item link' href='https://ali-gator.github.io/mesto/'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
