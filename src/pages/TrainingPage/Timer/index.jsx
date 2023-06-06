import React, { useState, useEffect } from 'react';

export const Timer = ({ onStart, onEnd }) => {
  const [time, setTime] = useState(60); // start time
  const [isStarted, setIsStarted] = useState(false); // track if timer is started

  useEffect(() => {
    let timer;
    if (isStarted && time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (!isStarted) {
      clearInterval(timer);
      setTime(60); // reset time when stopped
    } else {
      clearInterval(timer);
      onEnd();
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStarted, time]);

  const handleStart = () => {
    setIsStarted(true);
    onStart();
  };

  return (
    <div className='timer-container'>
      {/* START TIMER BUTTON */}
      <button className='timer-start-btn' onClick={handleStart}>Start</button>

      {/* TIMER */}
      <div>Time: {time}</div>
    </div>
  );
};

export default Timer;
