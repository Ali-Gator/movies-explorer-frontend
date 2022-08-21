import React from 'react';
import './aboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='subheader'>О проекте</h2>
      <dl className='about-project__list'>
        <div className='about-project__list-item facts'>
          <dt className='facts__term'>Дипломный проект включал 5 этапов</dt>
          <dd className='facts__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </dd>
        </div>
        <div className='about-project__list-item facts'>
          <dt className='facts__term'>На выполнение диплома ушло 5 недель</dt>
          <dd className='facts__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </dd>
        </div>
      </dl>
      <div className='term-scale'>
        <p className='term-scale__title term-scale__title_type_primary'>1 неделя</p>
        <p className='term-scale__title term-scale__title_type_secondary'>4 недели</p>
        <p className='term-scale__text'>Back-end</p>
        <p className='term-scale__text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
