import React from 'react';
import './notFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className='not-found'>
      <p className='not-found__title'>404</p>
      <p className='not-found__caption'>Страница не найдена</p>
      <button
        className='not-found__button button'
        type='button'
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
