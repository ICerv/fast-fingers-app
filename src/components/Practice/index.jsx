import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';
import Hand from './Hand';
import { left, right } from './fingerList';
import { validKey } from '../../pages/generalConstants';
import CapsLockWarning from './CapsLockWarning';

const Practice = ({ targetText, nextLink, backUrl, exerciseMode }) => {
  const [isAlreadyError, setIsAlreadyError] = useState(false);
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isTypingAllowed, setIsTypingAllowed] = useState(false);
  const [time, setTime] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(window.location.href);
  const [progress, setProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shiftKey, setShiftKey] = useState(false);
  const navigate = useNavigate();

  const onKeyCorrect = (event) => {
    setIndex(index + 1);
    setCorrectCount(correctCount + 1);
    setProgress(progress + 1);
    if (exerciseMode) {
      if (isAlreadyError) {
        setInputText((prev) => prev.slice(0, -1) + event.key);
        setIsAlreadyError(false);
      } else {
        setInputText((prev) => prev + event.key);
      }
    } else {
      setInputText((prev) => prev + event.key);
      setIsAlreadyError(false);
    }
  };

  const onKeyError = (event) => {
    if (exerciseMode) {
      if (!isAlreadyError) {
        setErrorCount(errorCount + 1);
        setInputText((prev) => prev + event.key);
        setIsAlreadyError(true);
      } else {
        setInputText((prev) => prev.slice(0, -1) + event.key);
      }
    } else {
      setIndex(index + 1);
      setIsAlreadyError(true);
      setErrorCount(errorCount + 1);
      setInputText((prev) => prev + event.key);
    }
    console.log(inputText);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    if (!event.keyCode) return;

    if (exerciseMode) {
      setIsTypingAllowed(true);
    } else {
      if (!isTypingAllowed || isFinished) return;
    }

    if (targetText.length === inputText.length) {
      localStorage.setItem('errorCount', errorCount);
      localStorage.setItem('accuracy', accuracy);
      handleEnd();
      setIsFinished(true);

      if (exerciseMode) {
        navigate('/results');
      }
    }

    const { key } = event;

    if (validKey(event.keyCode)) {
      if (event.keyCode === 192 && shiftKey === true) {
        event.key = '°';
      }
      if (key === targetText.charAt(index)) {
        onKeyCorrect(event);
      } else {
        onKeyError(event);
      }
    }

    const _accuracy =
      correctCount + errorCount !== 0 ? Math.floor((correctCount / (correctCount + errorCount)) * 100) : 0;
    setAccuracy(_accuracy);
    setShiftKey(event.keyCode === 16);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInputChange);
    return () => {
      window.removeEventListener('keydown', handleInputChange);
    };
  }, [correctCount, isTypingAllowed, errorCount]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    handleReload();
  }, [targetText]);

  useEffect(() => {
    setCurrentProgress(correctCount + errorCount);
  }, [correctCount, errorCount]);

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
    setIsAlreadyError(false);
    setIsTypingAllowed(false);
    setIsFinished(false);
  };

  const calculateWPM = () => {
    const words = inputText.trim().split(' ');
    const numWords = words.length;
    const minutes = time / 60000;
    const wpm = Math.floor(numWords / minutes);
    return wpm;
  };

  const wpm = endTime > startTime ? calculateWPM() : 0;

  localStorage.setItem('nextLink', nextLink);
  localStorage.setItem('currentUrl', currentUrl);

  return (
    <div className="page__container">
      <CapsLockWarning />

      <div className="page__container--up-container">
        <div className="page__container--links-container">
          <motion.a
            href={backUrl}
            className="link link__back"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ← Zpět
          </motion.a>
          {!exerciseMode && (
            <motion.a
              href={nextLink}
              className="link link__next"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Pokračovat →
            </motion.a>
          )}
        </div>

        <div className="page__container--statistics-container">
          {/* RESULTS  */}
          <div className="page__container--result-container">
            <div className="page__container--result-list">
              <Results name="Chyby" data={errorCount} />
              <Results name="Přesnost" data={accuracy} symbol="%" />
              {!exerciseMode ? <Results name="WPM" data={wpm} /> : null}
            </div>
          </div>

          {/* TIMER */}
          {!exerciseMode ? (
            <Timer
              onStart={handleStart}
              onEnd={handleEnd}
              onReload={handleReload}
              isStarted={isTypingAllowed}
              targetText={targetText}
              currentProgress={currentProgress}
            />
          ) : null}
        </div>
      </div>

      <div className="page__container--middle-container">
        {/* INPUT TEXT  */}
        <div className="page__container--input-container">
          <TextInput targetText={targetText} inputText={inputText} exerciseMode={exerciseMode} />
        </div>

        <div className="page__container--keyboard-container">
          {/* KEYBOARD  */}
          <Keyboard
            targetText={targetText}
            inputText={inputText}
            isAlreadyError={isAlreadyError}
            exerciseMode={exerciseMode}
          />

          <div className="page__container--hands-container">
            <div className="hand-image left">
              <Hand
                inputText={inputText}
                targetText={targetText}
                exerciseMode={exerciseMode}
                isAlreadyError={isAlreadyError}
                useTransform={true}
                fingers={left}
              />
            </div>

            <div className="hand-image right">
              <Hand
                inputText={inputText}
                targetText={targetText}
                exerciseMode={exerciseMode}
                isAlreadyError={isAlreadyError}
                useTransform={false}
                fingers={right}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
