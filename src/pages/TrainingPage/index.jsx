import React, { useState, useEffect } from 'react';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';
import{ validKey } from './validKey'

const TrainingPage = () => {
  const targetText = 'f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f ff ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff';
  const [inputText, setInputText] = useState('');
  const [errorIndex, setErrorIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleInputChange = (event) => {

    if (validKey(event.keyCode)) {
      setInputText((prev) => prev + event.key)
    } else if (event.keyCode === 8) {
      setInputText((prev) => prev.slice(0, -1))
    } 

    const { key } = event;

    if (key === targetText.charAt(correctIndex) || key === ' ') {
      setCorrectIndex((index) => index + 1)
    } else {
      setErrorIndex((index) => index + 1)
    }

    const _accuracy = correctIndex + errorIndex !== 0
      ? Math.floor((correctIndex / (correctIndex + errorIndex)) * 100)
      : 0;
    setAccuracy(_accuracy);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInputChange);
    return () => {
      window.removeEventListener('keydown', handleInputChange);
    };
  }, [correctIndex, errorIndex]);

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
          <Results name="Chyby" data={errorIndex} />
          <Results name="Přesnost" data={accuracy} symbol="%" />
          <Results name="WPM" data={wpm} />
        </ul>
      </div>
    </div>
  );
};

export default TrainingPage;
