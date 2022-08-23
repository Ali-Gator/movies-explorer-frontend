import React, { useEffect, useState } from 'react';
import ok from '../../images/icon-ok.svg';
import error from '../../images/icon-error.svg';
import './infoTooltip.css';

function InfoTooltip({ isOpen, message, type = 'error' }) {
  const [visible, setVisible] = useState(isOpen);

  const handleClose = () => setVisible(false);

  useEffect(() => {
    setTimeout(handleClose, 3000);
  }, [isOpen]);

  return (
    <div className={`popup ${visible && 'popup_opened'}`}>
      <div className='popup__container'>
        <img className='popup__icon' src={type === 'error' ? error : ok} alt='icon' />
        <p className='popup__text'>{message}</p>
        <button
          className='popup__close-button'
          onClick={handleClose}
          type='button'
          aria-label='close-button'
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
