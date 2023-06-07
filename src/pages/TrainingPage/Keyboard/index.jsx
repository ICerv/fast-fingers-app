import React from 'react';
import './style.css';


export const Keyboard = ({targetText, inputText}) => {
  const char = targetText[inputText.length]

  const getClassName = (keyString) => {
    let isActive = false
    
    if (char) {
      isActive = keyString === char.toLowerCase()
    }
    
    return isActive ? "key active" : "key"
  }

  const getShiftClassName = () => {
    const hasCapitalLetter = /[A-Z]/.test(char)
    
    return hasCapitalLetter ? "key special-key active" : "key special-key"
  }

  return (
    <div className="keyboard">
      <div className="row row-1">
        <div className={getClassName(";")} id=";">;</div>
        <div className={getClassName("1")} id="1">1</div>
        <div className={getClassName("2")}  id="2">2</div>
        <div className={getClassName("3")}  id="3">3</div>
        <div className={getClassName("4")} id="4">4</div>
        <div className={getClassName("5")}  id="5">5</div>
        <div className={getClassName("6")}  id="6">6</div>
        <div className={getClassName("7")} id="7">7</div>
        <div className={getClassName("8")}  id="8">8</div>
        <div className={getClassName("9")} id="9">9</div>
        <div className={getClassName("0")} id="0">0</div>
        <div className={getClassName("=")} id="=">=</div>
        <div className='key special-key' id="Backspace">Backspace</div>
      </div>
      <div className="row row-2">
        <div className='key special-key' id="Tab">Tab</div>
        <div className={getClassName("q")}  id="Q">Q</div>
        <div className={getClassName("w")}  id="W">W</div>
        <div className={getClassName("e")}  id="E">E</div>
        <div className={getClassName("r")}  id="R">R</div>
        <div className={getClassName("t")}  id="T">T</div>
        <div className={getClassName("y")}  id="Y">Y</div>
        <div className={getClassName("u")}  id="U">U</div>
        <div className={getClassName("i")}  id="I">I</div>
        <div className={getClassName("o")}  id="O">O</div>
        <div className={getClassName("p")}  id="P">P</div>
        <div className={getClassName("[")} >[</div>
        <div className={getClassName("]")} >]</div>
      </div>
      <div className="row row-3">
        <div className='key special-key' id="CapsLk">CapsLk</div>
        <div className={getClassName("a")} id="A">A</div>
        <div className={getClassName("s")}  id="S">S</div>
        <div className={getClassName("d")}  id="D">D</div>
        <div className={getClassName("f")} id="F">F</div>
        <div className={getClassName("g")}  id="G">G</div>
        <div className={getClassName("h")}  id="H">H</div>
        <div className={getClassName("j")}  id="J">J</div>
        <div className={getClassName("k")}  id="K">K</div>
        <div className={getClassName("l")}  id="L">L</div>
        <div className={getClassName(";")} >;</div>
        <div className={getClassName("'")} >{"'"}</div>
      </div>
      <div className="row row-4">
        <div className={getShiftClassName()} id="Shift">Shift</div>
        <div className={getClassName("z")}  id="Z">Z</div>
        <div className={getClassName("x")}  id="X">X</div>
        <div className={getClassName("c")}  id="C">C</div>
        <div className={getClassName("v")}  id="V">V</div>
        <div className={getClassName("b")}  id="B">B</div>
        <div className={getClassName("n")}  id="N">N</div>
        <div className={getClassName("m")}  id="M">M</div>
        <div className={getClassName(",")} >,</div>
        <div className={getClassName(",")} >.</div>
        <div className={getClassName(".")} >/</div>
      </div>
      <div className="row row-5">
        <div className='key' id="Ctrl">Ctrl</div>
        <div className='key' id="Alt">Alt</div>
        <div className={`space ${getClassName(" ")}`}  id="space">SPACE</div>
        <div className='key' id="AltGr">AltGr</div>
        <div className='key' id="Ctrl">Ctrl</div>
      </div>
    </div>
  );
};

