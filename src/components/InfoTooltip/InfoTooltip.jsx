import React, { useContext, useEffect, useState } from 'react';
import { InfoTooltipContext } from '../../contexts/InfoTooltipContext';
import ok from '../../images/icon-ok.svg';
import error from '../../images/icon-error.svg';
import './infoTooltip.css';
import constants from '../../utils/constants';

function InfoTooltip() {
  const { tooltip, setTooltip } = useContext(InfoTooltipContext);
  const [visible, setVisible] = useState(false);
  const { message, type } = tooltip;

  const handleClose = () => {
    setVisible(false);
    setTooltip({ message: '', type: null });
  };

  useEffect(() => {
    if (visible) {
      setTimeout(handleClose, 3000);
    }
  }, [visible]);

  useEffect(() => {
    if (message) {
      setVisible(true);
    }
  }, [message]);

  return (
    <div className={`popup ${visible && 'popup_opened'}`}>
      <div className='popup__container'>
        <img
          className='popup__icon'
          src={type === constants.MESSAGE_TYPE.ERROR ? error : ok}
          alt='icon'
        />
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
