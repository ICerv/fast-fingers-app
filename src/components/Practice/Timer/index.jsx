import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import TimerButton from './TimerButton';

export const Timer = ({ onStart, onEnd, onReload, isStarted, targetText, currentProgress }) => {
  const [time, setTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isStarted) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearTimeout(timerRef.current);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isStarted]);

  useEffect(() => {
    if (currentProgress >= targetText.length) {
      clearInterval(timerRef.current);
      setIsFinished(true);
      onEnd();
    }
  }, [currentProgress, targetText.length]);

  useEffect(() => {
    setTime(0);
  }, [targetText]);

  const handleStopStart = (action) => {
    if (action === 'start') {
      setIsFinished(false);
      onStart();
    } else if (action === 'reload') {
      setTime(0);
      setIsFinished(false);
      onReload();
    } else {
      clearInterval(timerRef.current);
      onEnd();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const formattedTime = formatTime(time);

  return (
    <div className="timer-container">
      {/* START TIMER BUTTON */}
      <TimerButton onClick={handleStopStart} isStarted={isStarted} isFinished={isFinished} />
      {/* TIMER */}
      <div className="time">Čas: {formattedTime}</div>
    </div>
  );
};

export default Timer;
