import React, { useState, useEffect } from 'react';
import './style.css';

const TextInput = () => {
  const targetText = 'f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f'
  const [inputText, setInputText] = useState('');

  const validKey = (keyCode) => {
    return keyIsNumber(keyCode) || 
    keyIsUpperKey(keyCode) || 
    keyIsLowerKey(keyCode) || 
    keyIsAvalibeSymbole(keyCode)
  }

  const keyIsNumber = (keyCode) => {
    return keyCode >= 48 && keyCode <= 57
  }

  const keyIsUpperKey = (keyCode) => {
    return keyCode >= 65 && keyCode <= 90
  }

  const keyIsLowerKey = (keyCode) => {
    return keyCode >= 97 && keyCode <= 223
  }

  const keyIsAvalibeSymbole = (keyCode) => {
    return [13, 32].includes(keyCode)
  }

  const handleInputChange = (event) => {
    if (validKey(event.keyCode)) {
      setInputText((prev) => prev + event.key); 
    } else if (event.keyCode === 8) {
      setInputText((prev) => prev.slice(0, -1))
    }  
  };

  useEffect(() => {
    document.addEventListener('keydown', handleInputChange);
  }, []);

  const renderText = () => {
    const targetChars = targetText.split('');
    const inputChars = inputText.split('');
  
    return targetChars.map((char, index) => {
      if (index < inputText.length) {
        return <span key={index} className={char === inputChars[index] ? 'letter right' : 'letter wrong'}>{char}</span>
      } if (index === inputText.length) {
        return <span key={index} className='letter active'>{char}</span>
      }
      return <span key={index} className='letter'>{char}</span>
       
    });
  };

  return (
    <>
      <div>{renderText()}</div>
    </>
  );

};

export default TextInput;