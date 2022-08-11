import React from 'react';
import './aboutMe.css';
import { NavLink } from 'react-router-dom';
import mePhoto from '../../images/me.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__subheader subheader'>Студент</h2>
      <div className='about-me__description'>
        <p className='about-me__title'>Виталий</p>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я
          люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
          компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className='about-me__links'>
          <li>
            <NavLink to='/signup' className='about-me__link-item'>
              Facebook
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='about-me__link-item'>
              Github
            </NavLink>
          </li>
        </ul>
      </div>
      <img className='about-me__image' alt='Моя фотография' src={mePhoto} />
    </section>
  );
}

export default AboutMe;
