import React, { useState, useEffect } from 'react';
import './style.css';

const CapsLockWarning = () => {
    const [capsLockOn, setCapsLockOn] = useState(false);
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.getModifierState('CapsLock')) {
          setCapsLockOn(true);
        } else {
          setCapsLockOn(false);
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    if (capsLockOn) {
      return <div className='capslock-warning'>Caps Lock je zapnutý!</div>;
    } else {
      return null;
    }
  };
  
  export default CapsLockWarning;