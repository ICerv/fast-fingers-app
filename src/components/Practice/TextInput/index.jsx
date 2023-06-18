import React, { useRef, useEffect } from 'react';
import './style.css';

const TextInput = ({ targetText, inputText, exerciseMode }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [inputText]);

  const renderText = () => {
    let isActive = true;
    return Array.from(targetText).map((char, index) => {
      if (index < inputText.length) {
        let className;
        if (char === inputText[index]) {
          className = 'letter letter_right';
          isActive = true;
        } else {
          className = 'letter letter_wrong';
          isActive = false;
        }
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      }
      if (index === inputText.length) {
        if (!exerciseMode || (exerciseMode && isActive)) {
          return (
            <span key={index} ref={ref} className="letter letter_active">
              {char}
            </span>
          );
        }
      }

      return (
        <span key={index} className="letter">
          {char}
        </span>
      );
    });
  };

  return (
    <>
      <div>{renderText()}</div>
    </>
  );
};

export default TextInput;
