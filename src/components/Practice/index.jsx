import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';
import Hand from './Hand';
import { left, right } from './fingerList';
import { validKey } from '../../pages/generalConstants';

const Practice = ({ targetText, nextLink, backUrl, exerciseMode }) => {
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

    if (exerciseMode) {
      setIsTypingAllowed(true)
    } else {
      if (!isTypingAllowed) return;
    }

   

    if (targetText.length === inputText.length) {
      handleEnd();
    }
    const { key } = event;

    if (validKey(event.keyCode)) {
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

  useEffect(() => {
    handleReload();
  }, [targetText]);

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
    setIndex(0);
    setIsAlredyError(false);
    setIsTypingAllowed(false);
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
            {!exerciseMode ?
              <Results name="WPM" data={wpm} />
              : null 
            }
          </div>
        </div>

        {/* TIMER */}
        {!exerciseMode ?
          <Timer
          onStart={handleStart}
          onEnd={handleEnd}
          onReload={handleReload}
          isStarted={isTypingAllowed}
          targetText={targetText}
        />
        : null
        }
        
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
        
          {/* KEYBOARD  */}
          <Keyboard
            targetText={targetText}
            inputText={inputText}
            isAlreadyError={isAlreadyError}
            exerciseMode={exerciseMode}
          />

          <div className='hands-container'>

            <div className="hand-image left">
              <Hand 
                inputText={inputText} 
                targetText={targetText} 
                exerciseMode={exerciseMode} 
                isAlreadyError={isAlreadyError}
                useTransform={true}
                fingers={left}/>
            </div>

            <div className="hand-image right">
              <Hand
                inputText={inputText} 
                targetText={targetText} 
                exerciseMode={exerciseMode} 
                isAlreadyError={isAlreadyError}
                useTransform={false}
                fingers={right}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
