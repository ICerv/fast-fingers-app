import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';
import { exercisesSections } from '../exercisesSections';
import { validKey } from '../generalConstants'

const TrainingPage = () => {
  const { sectionId, lessonId } = useParams()
  const section = exercisesSections.find((section) => section.id === Number(sectionId))
  const lesson = section.lessons.find((lesson) => lesson.id === Number(lessonId))
  const test = true;
  const [isAlreadyError , setIsAlredyError] = useState(false)

  const targetText = lesson.exercises[0];
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleInputChange = (event) => {
    event.preventDefault()

    // if (validKey(event.keyCode)) {
    //   setInputText((prev) => prev + event.key)
    // } else if (event.keyCode === 8) {
    //   setInputText((prev) => prev.slice(0, -1))
    // } 

    const { key } = event;

    if (event.keyCode !== 16 && event.keyCode !== 8 && event.keyCode !== 18) {
      if (key === targetText.charAt(index)) {
        setIndex(index + 1)
        setCorrectCount(correctCount + 1)

        if (isAlreadyError) {
        setInputText((prev) => prev.slice(0, -1) + event.key)
        setIsAlredyError(false)
        } else {
          setInputText((prev) => prev + event.key)
        }
      } else if (test ) {
        if (!isAlreadyError) {
          setErrorCount(errorCount + 1)
          setInputText((prev) => prev + event.key)
          setIsAlredyError(true)
        }
        
      } else {
        setErrorCount(errorCount + 1)
        setInputText((prev) => prev + event.key)
      }
    }

    const _accuracy = correctCount + errorCount !== 0
      ? Math.floor((correctCount / (correctCount + errorCount)) * 100)
      : 0;
    setAccuracy(_accuracy);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInputChange);
    return () => {
      window.removeEventListener('keydown', handleInputChange);
    };
  }, [correctCount, errorCount]);

  const handleStart = () => {
    setStartTime(Date.now()); // set start time
  };

  const handleEnd = () => {
    setEndTime(Date.now()); // set end time
  };

  const calculateWPM = () => {
    const words = inputText.trim().split(' ');
    const numWords = words.length;
    const minutes = (endTime - startTime) / 60000; // convert milliseconds to minutes
    const wpm = Math.floor(numWords / minutes);
    return wpm;
  };

  const wpm = endTime > startTime ? calculateWPM() : 0;

  return (
    <div className='container-page'>

      {/* TIMER */}
      <div className="middle-container">
        <Timer onStart={handleStart} onEnd={handleEnd} />

        {/* INPUT TEXT  */}
        <div className="keyboard">

          <div className='input-container'>
            <TextInput
              targetText={targetText}
              inputText={inputText}
            />
          </div>

          <div className="keyboard-container">

            <div className='hand-image'>
              <img src={require('./img/Hand left.png')} className='hand left' alt='Left hand' />
            </div>

            {/* KEYBOARD  */}
            <Keyboard 
            targetText={targetText} 
            inputText={inputText}
            isAlreadyError={isAlreadyError}
            />

            <div className='hand-image'>
              <img src={require('./img/Hand right.png')} className='hand right' alt='Right hand' />
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS  */}
      <div className='result-container'>
        <ul className="result-list">
          <Results name="Chyby" data={errorCount} />
          <Results name="Přesnost" data={accuracy} symbol="%" />
          <Results name="WPM" data={wpm} />
        </ul>
      </div>
    </div>
  );
};

export default TrainingPage;