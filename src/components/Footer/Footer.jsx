import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; {`${new Date().getFullYear()}`}</p>
        <ul className='footer__links'>
          <li>
            <a
              className='footer__link link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link link'
              href='https://github.com/Ali-Gator'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              className='footer__link link'
              href='https://www.facebook.com/oleg.gordienov'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
