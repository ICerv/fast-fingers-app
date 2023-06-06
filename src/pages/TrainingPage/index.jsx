import React, { useState, useEffect } from 'react';
import './style.css';
import TextInput from './TextInput';
import Results from './Results';
import { Keyboard } from './Keyboard';
import Timer from './Timer';

const TrainingPage = () => {
  const targetText = 'f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f ff ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff';
  const [inputText, setInputText] = useState('');
  const [errorIndex, setErrorIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);


  const handleInputChange = (event) => {
    const { key } = event;
    let newCorrectIndex = correctIndex;
    let newErrorIndex = errorIndex;

    if (key === targetText.charAt(correctIndex) || key === ' ') {
      setInputText(inputText + key);
      newCorrectIndex++;
    } else {
      setInputText(inputText + key);
      newErrorIndex++;
    }

    setCorrectIndex(newCorrectIndex);
    setErrorIndex(newErrorIndex);

    const _accuracy = newCorrectIndex + newErrorIndex !== 0
      ? Math.floor((newCorrectIndex / (newCorrectIndex + newErrorIndex)) * 100)
      : 0;
    setAccuracy(_accuracy);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInputChange);
    return () => {
      window.removeEventListener('keydown', handleInputChange);
    };
  }, [inputText, correctIndex, errorIndex]);

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
            <TextInput targetText={targetText} />
          </div>

          <div className='hand-image'>
            <img src={require('./img/Hand left.png')} className='hand left' alt='Left hand' />
          </div>

          {/* KEYBOARD  */}
          <Keyboard />

          <div className='hand-image'>
            <img src={require('./img/Hand right.png')} className='hand right' alt='Right hand' />
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
