import React, { useContext, useEffect, useState } from 'react';
import './moviesCard.css';
import { useLocation } from 'react-router-dom';
import constants from '../../utils/constants';
import { formattedDuration } from '../../utils/utils';
import mainApi from '../../utils/MainApi';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';

function MoviesCard({ movie }) {
  const { setTooltip } = useContext(InfoTooltipContext);
  const { image, nameRU, duration, status, id, mongoId } = movie;
  const [cardStatus, setCardStatus] = useState(status);
  const [newMongoId, setNewMongoId] = useState(mongoId);
  const isSavedMovieLocation = useLocation().pathname === '/saved-movies';
  const [isMovieDeleted, setIsMovieDeleted] = useState(false);

  const handleClick = async () => {
    try {
      if (cardStatus) {
        await mainApi.deleteMovie(
          localStorage.getItem(constants.STORAGE.JWT),
          newMongoId || movie._id
        );
        const savedMovies = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        savedMovies.initialMovies.forEach((film) => {
          if (film.id === id || film.id === movie.movieId) {
            // eslint-disable-next-line no-param-reassign
            delete film.status;
            // eslint-disable-next-line no-param-reassign
            delete film.mongoId;
          }
        });
        localStorage.setItem(constants.STORAGE.MOVIES_DATA, JSON.stringify(savedMovies));
        setCardStatus(null);
        if (isSavedMovieLocation) {
          setIsMovieDeleted(true);
        }
      } else {
        const { _id } = await mainApi.postMovie(localStorage.getItem(constants.STORAGE.JWT), movie);
        const savedMovies = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        savedMovies.initialMovies.forEach((film) => {
          if (film.id === id) {
            // eslint-disable-next-line no-param-reassign
            film.status = 'liked';
            // eslint-disable-next-line no-param-reassign
            film.mongoId = _id;
            setNewMongoId(_id);
          }
        });
        localStorage.setItem(constants.STORAGE.MOVIES_DATA, JSON.stringify(savedMovies));
        setCardStatus('liked');
      }
    } catch (e) {
      setTooltip({
        message: `${constants.MESSAGE.SERVER_ERR}: ${e.message}`,
        type: constants.MESSAGE_TYPE.ERROR
      });
    }
  };

  useEffect(() => {
    if (isSavedMovieLocation) {
      setCardStatus('delete');
    }
  }, []);
  console.log(movie, movie.trailerLink);
  return isMovieDeleted ? null : (
    <div className='card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={`${image.url ? `${constants.IMG_URL}${image.url}` : `${image}`}`}
          alt='Кадр из фильма'
          className='card__image'
        />
      </a>
      <div className='card__caption'>
        <p className='card__title'>{nameRU}</p>
        <button
          className={`card__like ${
            cardStatus ? `card__like_type_${cardStatus}` : 'card__like_type_default'
          }`}
          type='button'
          aria-label='like, dislike or delete'
          onClick={handleClick}
        />
        <p className='card__time'>{formattedDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
