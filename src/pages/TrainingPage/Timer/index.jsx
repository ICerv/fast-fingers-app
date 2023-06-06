import React, { useState, useEffect } from 'react';
import './style.css';

export const Timer = ({ onStart, onEnd }) => {
  const [time, setTime] = useState(5);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isStarted && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isStarted && time !== 5) {
      clearInterval(timer);
      //   setTime(5);
      //   onEnd();
      //   setIsStarted(false);
      // } else if (!isStarted) {
      //   clearInterval(timer);
      //   // } else {
      //   //   clearInterval(timer);
      //   //   onEnd();
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStarted, time]);

  useEffect(() => {
    let resetTimer;
    if (time === 0) {
      resetTimer = setTimeout(() => {
        setTime(5);
        setIsStarted(false);
      }, 2000);
    }
    return () => {
      clearTimeout(resetTimer);
    };
  }, [time]);



  const handleStopStart = () => {
    setIsStarted(prevIsStarted => !prevIsStarted);
    // setIsStarted(!isStarted);
    if (!isStarted && time !== 0) {
      onStart();
    } else {
      onEnd();
    }
  };

  const buttonClass = isStarted ? ' btn timer-stop-btn' : 'btn timer-start-btn';


  return (
    <div className='timer-container'>
      {/* START TIMER BUTTON */}
      <button
        className={buttonClass}
        onClick={handleStopStart}>
        {isStarted ? 'Stop' : 'Start'}
      </button>

      {/* TIMER */}
      <div className='time'>Time: {time}</div>
    </div>
  );
};

export default Timer;
