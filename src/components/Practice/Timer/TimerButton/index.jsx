import React from 'react';
import './style.css';

const TimerButton = ({ onClick, isStarted, isFinished }) => {
  const handleClick = () => {
    if (isStarted) {
      onClick('stop');
    } else if (isFinished) {
      onClick('reload');
    } else {
      onClick('start');
    }
  };

  let buttonText;
  if (isStarted) {
    buttonText = 'Stop';
  } else if (isFinished) {
    buttonText = 'Restart';
  } else {
    buttonText = 'Start';
  }

  const buttonClass = isStarted ? 'btn timer-stop-btn' : 'btn timer-start-btn';

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
};
export default TimerButton;
