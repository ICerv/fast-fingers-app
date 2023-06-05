import React, { useState, useEffect } from 'react';
import './style.css';

import { quotesArray, random, allowedKeys } from './QuotesData';
import TextInput from './TextInput';
import Results from './Results';

export const Keyboard = () => {
  const [input, setInput] = useState('');
  const [quote, setQuote] = useState({});
  const [index, setIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [duration, setDuration] = useState(60);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);


  useEffect(() => {
    // Select a random quote from the quotesArray
    const newQuote = random(quotesArray);

    // Set the selected quote as the current quote in state
    setQuote(newQuote);

    // Set the input value to the quote text
    setInput(newQuote.quote);
  }, []);


  //Compare the pressed key to the quote and update the corresponding indexes
  const handleKeyDown = (event) => {
    event.preventDefault();
    // console.log(event)
    const { key } = event;

    if (quote && quote.quote) {
      const quoteText = quote.quote;

      if (key === quoteText.charAt(index)) {
        setIndex(index + 1);
        const currentChar = quoteText.substring(index + 1, index + quoteText.length);
        setInput(currentChar);
        setCorrectIndex(correctIndex + 1);
      } else if (allowedKeys.includes(key)) {
        setErrorIndex(errorIndex + 1);
      }
    }
  };


  //Update accuracy and WPM based on tracked variable changes
  useEffect(() => {
    if (index > 5) {

      const timeRemains = Math.round(((60 - duration) / 60) * 100) / 100;
      const _accuracy = Math.floor((index - errorIndex) / index * 100);
      const _wpm = Math.round(correctIndex / 5 / timeRemains);

      setAccuracy(_accuracy);
      setWpm(_wpm);
    }
  }, [index, errorIndex, correctIndex, duration])


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  return (
    <div className='container-page'>

      {/* RESULTS  */}
      <div className='result-container'>
        <ul className="result-list">
          <Results name="Čas" data={duration} />
          <Results name="Chyby" data={errorIndex} />
          <Results name="Přesnost" data={accuracy} symbol="%" />
        </ul>
      </div>
      
      {/* INPUT TEXT  */}
      <div className="keyboard">
      <div className='hand-image'>
        <img src={require('./img/Hand left.png')} className='hand left' alt='Left hand'/>
      </div>
        <div className='input-container'> 
            <TextInput />
          {/* <input
            type="text"
            className="input-text"
            value={input}
            onKeyDown={handleKeyDown}
            // autoFocus
            onChange={(e) => {
              setInput(e.target.value);
            }}

          /> */}

          {/* POKUS
          {quote && quote.quote ? (
            <div className='input-text'>
              {quote.quote.split('').map((char, charId) => (
                <span
                  key={charId}
                  className={`${charId === index ? 'active' : ''} ${charId >= index ? 'upcoming' : ''
                    } ${charId < index && char !== input[charId] ? 'wrong' : ''
                    }`}
                >
                  {char}
                </span>
              ))}
            </div>
          ) : null} */}
        </div>

        {/* KEYBOARD  */}
        <ul className="row row-1">
          <li className='key' id=";">;</li>
          <li className='key' id="1">1</li>
          <li className='key' id="2">2</li>
          <li className='key' id="3">3</li>
          <li className='key' id="4">4</li>
          <li className='key' id="5">5</li>
          <li className='key' id="6">6</li>
          <li className='key' id="7">7</li>
          <li className='key' id="8">8</li>
          <li className='key' id="9">9</li>
          <li className='key' id="0">0</li>
          <li className='key' id="=">=</li>
          <li className=' key special-key' id="Backspace">Backspace</li>
        </ul>
        <ul className="row row-2">
          <li className='key special-key' id="Tab">Tab</li>
          <li className='key' id="Q">Q</li>
          <li className='key' id="W">W</li>
          <li className='key' id="E">E</li>
          <li className='key' id="R">R</li>
          <li className='key' id="T">T</li>
          <li className='key' id="Y">Y</li>
          <li className='key' id="U">U</li>
          <li className='key' id="I">I</li>
          <li className='key' id="O">O</li>
          <li className='key' id="P">P</li>
          <li className='key'>[</li>
          <li className='key'>]</li>
        </ul>
        <ul className="row row-3">
          <li className='key special-key' id="CapsLk">CapsLk</li>
          <li className='key' id="A">A</li>
          <li className='key' id="S">S</li>
          <li className='key' id="D">D</li>
          <li className='key' id="F">F</li>
          <li className='key' id="G">G</li>
          <li className='key' id="H">H</li>
          <li className='key' id="J">J</li>
          <li className='key' id="K">K</li>
          <li className='key' id="L">L</li>
          <li className='key'>;</li>
          <li className='key'>{"'"}</li>
        </ul>
        <ul className="row row-4">
          <li className='key special-key' id="Shift">Shift</li>
          <li className='key' id="Z">Z</li>
          <li className='key' id="X">X</li>
          <li className='key' id="C">C</li>
          <li className='key' id="V">V</li>
          <li className='key' id="B">B</li>
          <li className='key' id="N">N</li>
          <li className='key' id="M">M</li>
          <li className='key'>,</li>
          <li className='key'>.</li>
          <li className='key'>/</li>
        </ul>
        <ul className="row row-5">
          <li className='key' id="Ctrl">Ctrl</li>
          <li className='key' id="Alt">Alt</li>
          <li className='key' id="space">SPACE</li>
          <li className='key' id="AltGr">AltGr</li>
          <li className='key' id="Ctrl">Ctrl</li>
        </ul>
        <div className='hand-image'>
        <img src={require('./img/Hand right.png')} className='hand right' alt='Right hand'/>
      </div>
      </div>
    </div>
  );
};

