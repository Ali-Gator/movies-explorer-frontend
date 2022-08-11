import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li>
            <NavLink to='/signup' className='footer__link'>
              Яндекс.Практикум
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='footer__link'>
              Github
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='footer__link'>
              Facebook
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
