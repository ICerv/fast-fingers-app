import React, { useState, useEffect } from 'react';
import './style.css';
import TimerButton from './TimerButton';


export const Timer = ({ onStart, onEnd }) => {
  const [time, setTime] = useState(5);
  const [isStarted, setIsStarted] = useState(false);
  const [isTypingAllowed, setIsTypingAllowed] = useState(true)

  useEffect(() => {
    let timer;
    if (isStarted && time > 0) {
      //cas bezi
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if ((isStarted && time === 0)) {
      //reload
      clearTimeout(timer);
      setIsStarted(false)
      setIsTypingAllowed(false);
    } else if (!isStarted) {
      //cas nebezi
      setIsTypingAllowed(false);
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isStarted, time]);

  const handleStopStart = (action) => {
    if (action === 'start') {
      setIsStarted(true)
      setIsTypingAllowed(true);
    } else if (action === 'reload') {
      setTime(5);
      setIsTypingAllowed(false);
    } else {
      setIsTypingAllowed(false)
      setIsStarted(false)
    }
  };

  const buttonClass = isStarted ? ' btn timer-stop-btn' : 'btn timer-start-btn';


  return (
    <div className='timer-container'>
      {/* START TIMER BUTTON */}
      <TimerButton
        onClick={handleStopStart}
        isStarted={isStarted}
        isTimeUp={time === 0}>
      </TimerButton>

      {/* TIMER */}
      <div className='time'>Time: {time}</div>
    </div>
  );
};

export default Timer;
