import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';

const Practice = ({ targetText, nextLink, backUrl }) => {
  const exerciseMode = false;
  const [isAlreadyError, setIsAlredyError] = useState(false);
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isTypingAllowed, setIsTypingAllowed] = useState(false);
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  const onKeyCorrect = (event) => {
    setIndex(index + 1);
    setCorrectCount(correctCount + 1);
    if (exerciseMode) {
      if (isAlreadyError) {
        setInputText((prev) => prev.slice(0, -1) + event.key);
        setIsAlredyError(false);
      } else {
        setInputText((prev) => prev + event.key);
      }
    } else {
      setInputText((prev) => prev + event.key);
      setIsAlredyError(false);
    }
  };

  const onKeyError = (event) => {
    if (exerciseMode) {
      if (!isAlreadyError) {
        setErrorCount(errorCount + 1);
        setInputText((prev) => prev + event.key);
        setIsAlredyError(true);
      }
    } else {
      setIndex(index + 1);
      setIsAlredyError(true);
      setErrorCount(errorCount + 1);
      setInputText((prev) => prev + event.key);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    if (!isTypingAllowed) return;

    const { key } = event;

    if (event.keyCode !== 16 && event.keyCode !== 8 && event.keyCode !== 18) {
      if (key === targetText.charAt(index)) {
        onKeyCorrect(event);
      } else {
        onKeyError(event);
      }
    }

    const _accuracy =
      correctCount + errorCount !== 0 ? Math.floor((correctCount / (correctCount + errorCount)) * 100) : 0;
    setAccuracy(_accuracy);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInputChange);
    return () => {
      window.removeEventListener('keydown', handleInputChange);
    };
  }, [correctCount, isTypingAllowed, errorCount]);

  const handleStart = () => {
    setStartTime(Date.now());
    setIsTypingAllowed(true);
  };

  const handleEnd = () => {
    setEndTime(Date.now());
    setIsTypingAllowed(false);
    setTime(time + (Date.now() - startTime));
  };

  const handleReload = () => {
    setInputText('');
    setCorrectCount(0);
    setErrorCount(0);
    setAccuracy(0);
    setEndTime(0);
    setStartTime(0);
    setTime(0);
  };

  const calculateWPM = () => {
    const words = inputText.trim().split(' ');
    const numWords = words.length;
    const minutes = time / 60000;
    const wpm = Math.floor(numWords / minutes);
    return wpm;
  };

  const wpm = endTime > startTime ? calculateWPM() : 0;

  return (
    <div className="container-page">
      <div className="up-container">
        <button className="button back" onClick={() => navigate(backUrl)}>
          Zpět
        </button>

        {/* RESULTS  */}
        <div className="result-container">
          <div className="result-list">
            <Results name="Chyby" data={errorCount} />
            <Results name="Přesnost" data={accuracy} symbol="%" />
            <Results name="WPM" data={wpm} />
          </div>
        </div>
        {/* TIMER */}
        <Timer onStart={handleStart} onEnd={handleEnd} onReload={handleReload} />

        <button className="button next" onClick={() => navigate(`${nextLink}`)}>
          Pokračovat
        </button>
      </div>

      <div className="middle-container">
        {/* INPUT TEXT  */}
        <div className="input-container">
          <TextInput targetText={targetText} inputText={inputText} exerciseMode={exerciseMode} />
        </div>

        <div className="keyboard-container">
          <div className="hand-image">
            <img src={require('./img/Hand left.png')} className="hand left" alt="Left hand" />
          </div>

          {/* KEYBOARD  */}
          <Keyboard
            targetText={targetText}
            inputText={inputText}
            isAlreadyError={isAlreadyError}
            exerciseMode={exerciseMode}
          />

          <div className="hand-image">
            <img src={require('./img/Hand right.png')} className="hand right" alt="Right hand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
