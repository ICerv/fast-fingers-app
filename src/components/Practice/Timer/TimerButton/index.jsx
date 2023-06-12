import React from 'react';
import './style.css';

const TimerButton = ({ onClick, isStarted, isTimeUp }) => {
  const handleClick = () => {
    if (isStarted) {
      onClick('stop');
    } else if (isTimeUp) {
      onClick('reload');
    } else {
      onClick('start');
    }
  };

  const buttonClass = isStarted ? 'btn timer-stop-btn' : 'btn timer-start-btn';

  return (
    <button className={buttonClass} onClick={handleClick}>
      {isStarted ? 'Stop' : isTimeUp ? <small className=" btn timer-reload-btn">Restart</small> : 'Start'}
    </button>
  );
};

export default TimerButton;
