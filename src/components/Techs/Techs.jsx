import React from 'react';
import './techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='subheader'>Технологии</h2>
      <p className='techs__title'>7 технологий</p>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='techs__skills'>
        <li className='techs__skill-item'>HTML</li>
        <li className='techs__skill-item'>CSS</li>
        <li className='techs__skill-item'>JS</li>
        <li className='techs__skill-item'>React</li>
        <li className='techs__skill-item'>Git</li>
        <li className='techs__skill-item'>Express.js</li>
        <li className='techs__skill-item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
