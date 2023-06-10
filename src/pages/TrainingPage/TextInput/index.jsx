import React, { useState, useEffect } from 'react';
import './style.css';

const TextInput = ({ targetText, inputText }) => {
  const renderText = () => {
    let isActive = true
    return Array.from(targetText).map((char, index) => {
      if (index < inputText.length) {
        let className
        if (char === inputText[index]) {
          className = 'letter right'
          isActive = true
        } else {
          className = 'letter wrong'
          isActive = false
        }
        return <span key={index} className={className }>{char}</span>
      } if (index === inputText.length && isActive) {
        return <span key={index} className= 'letter active'>{char}</span>
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