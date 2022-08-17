import React from 'react';
import './moviesCard.css';

function MoviesCard({ imageUrl, title, duration }) {
  const formattedDuration = (time) => {
    if (time >= 60) {
      return `${(time / 60).toFixed()}ч ${time % 60}м`;
    }
    return `${time}м`;
  };
  return (
    <div className='card'>
      <img src={imageUrl} alt='Кадр из фильма' className='card__image' />
      <div className='card__caption'>
        <p className='card__title'>{title}</p>
        <span className='card__like card__like_type_default' />
        <p className='card__time'>{formattedDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
