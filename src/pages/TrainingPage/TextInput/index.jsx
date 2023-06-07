import React, { useState, useEffect } from 'react';
import './style.css';

const TextInput = ({ targetText, inputText }) => {
  const renderText = () => {

    return Array.from(targetText).map((char, index) => {
      if (index < inputText.length) {
        return <span key={index} className={char === inputText[index] ? 'letter right' : 'letter wrong'}>{char}</span>
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
}

export default TextInput;