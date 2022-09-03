import React, { useContext, useState } from 'react';
import './moviesCard.css';
import constants from '../../utils/constants';
import { formattedDuration } from '../../utils/utils';
import mainApi from '../../utils/MainApi';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';

function MoviesCard({ movie }) {
  const { setTooltip } = useContext(InfoTooltipContext);
  const {
    image: { url },
    nameRU,
    duration,
    status,
    id,
    mongoId
  } = movie;
  const [cardStatus, setCardStatus] = useState(status);
  const [newMongoId, setNewMongoId] = useState(mongoId);

  const handleClick = async () => {
    try {
      if (cardStatus) {
        await mainApi.deleteMovie(localStorage.getItem(constants.STORAGE.JWT), newMongoId);
        const savedMovies = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        savedMovies.initialMovies.forEach((film) => {
          if (film.id === id) {
            // eslint-disable-next-line no-param-reassign
            delete film.status;
            // eslint-disable-next-line no-param-reassign
            delete film.mongoId;
          }
        });
        localStorage.setItem(constants.STORAGE.MOVIES_DATA, JSON.stringify(savedMovies));
        setCardStatus(null);
      } else {
        const { _id } = await mainApi.postMovie(localStorage.getItem(constants.STORAGE.JWT), movie);
        const savedMovies = JSON.parse(localStorage.getItem(constants.STORAGE.MOVIES_DATA));
        savedMovies.initialMovies.forEach((film) => {
          if (film.id === id) {
            // eslint-disable-next-line no-param-reassign
            film.status = 'saved';
            // eslint-disable-next-line no-param-reassign
            film.mongoId = _id;
            setNewMongoId(_id);
          }
        });
        localStorage.setItem(constants.STORAGE.MOVIES_DATA, JSON.stringify(savedMovies));
        setCardStatus('saved');
      }
    } catch (e) {
      setTooltip({
        message: `${constants.MESSAGE.SERVER_ERR}: ${e.message}`,
        type: constants.MESSAGE_TYPE.ERROR
      });
    }
  };

  return (
    <div className='card'>
      <img src={`${constants.IMG_URL}/${url}`} alt='Кадр из фильма' className='card__image' />
      <div className='card__caption'>
        <p className='card__title'>{nameRU}</p>
        <button
          className={`card__like ${
            cardStatus ? 'card__like_type_liked' : 'card__like_type_default'
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
