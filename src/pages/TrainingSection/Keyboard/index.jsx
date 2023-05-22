import React, { useState, useEffect } from 'react';
import './style.css';

const Keyboard = () => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      handleKeyPress(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  //Dodelat CapsLk, Ctrl, Alt, AltGr a dalsi...
  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
      setInputText(prevText => prevText.slice(0, -1));
    } else if (key === 'Enter') {
      setInputText(prevText => prevText + '\n');
    } else if (key === 'Shift') {
      setInputText(prevText => prevText.toUpperCase());
    } else {
      setInputText(prevText => prevText + key);
    }
  };

  const keyboardRows = [
    [';', '+', 'ě', 'š', 'č', 'ř', 'ž', 'ý', 'á', 'í', 'é', '=', '´', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'ú', ')', 'Enter'],
    ['CapsLk', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ů', '§', '¨¨'],
    ['Shift', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', 'Shift'],
    ['Ctrl', 'Fn', 'Alt', 'Space', 'AltGr', 'Ctrl', 'Home', 'PgUp', 'PgDn', 'End']
  ];

  return (
    <div className='main-container'>
      <textarea
        value={inputText}
        readOnly
        rows={7}
        className="input-text"
      />
      <div className="keyboard">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key, keyIndex) => (
              <button
                key={keyIndex}
                onClick={() => handleKeyPress(key)}
                className={`keyboard-key ${key === 'Shift' ? 'shift-key' : ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;