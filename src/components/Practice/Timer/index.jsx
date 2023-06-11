import React, { useState, useEffect } from 'react';
import './style.css';
import TimerButton from './TimerButton';

export const Timer = ({ onStart, onEnd, onReload, isStarted }) => {
  const [time, setTime] = useState(50);

  useEffect(() => {
    let timer;
    if (isStarted && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isStarted && time === 0) {
      clearTimeout(timer);
      onEnd();
    } else if (!isStarted) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isStarted, time]);

  const handleStopStart = (action) => {
    if (action === 'start') {
      onStart();
    } else if (action === 'reload') {
      setTime(50);
      onReload();
    } else {
      onEnd();
    }
  };

  return (
    <div className="timer-container">
      {/* START TIMER BUTTON */}
      <TimerButton onClick={handleStopStart} isStarted={isStarted} isTimeUp={time === 0}></TimerButton>

      {/* TIMER */}
      <div className="time">Time: {time}</div>
    </div>
  );
};

export default Timer;
