import React from 'react';
import './style.css';


export const Keyboard = () => {

  return (
    <div className="keyboard">
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

    </div>
  );
};

