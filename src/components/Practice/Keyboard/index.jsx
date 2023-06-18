import React from 'react';
import { lefttShiftSymbol, rightShiftSymbol  } from '../../../pages/generalConstants';
import './style.css';

export const Keyboard = ({ targetText, inputText, isAlreadyError, exerciseMode }) => {
  
  let char = targetText[inputText.length];

  if (exerciseMode && isAlreadyError) {
    char = targetText[inputText.length - 1];
  }

  const getClassName = (keyArray) => {
    const errorChar = inputText.slice(-1);
    if (isAlreadyError && keyArray.includes(errorChar.toLowerCase())) {
      return 'key key__wrong';
    }

    let isActive = false;
    if (char) {
      isActive = keyArray.some((key) => key === char.toLowerCase());
    }

    return isActive ? 'key key__active' : 'key';
  };

  const getRightShiftClassName = () => {
    const hasCapitalLetter = rightShiftSymbol.includes(char);

    return hasCapitalLetter ? 'key key__special-key key__active' : 'key key__special-key';
  };

  const getLeftShiftClassName = () => {
    const hasCapitalLetter = lefttShiftSymbol.includes(char);

    return hasCapitalLetter ? 'key key__special-key key__active' : 'key key__special-key';
  };

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <div className={`${getClassName([';', '°'])} key__two`} id=";">
          <div className="key__two-top">°</div>
          <div className="key__two-bottom">;</div>
        </div>
        <div className={`${getClassName(['1', '+'])} key__two`} id="1">
          <div className="key__two-top">1</div>
          <div className="key__two-bottom">+</div>
        </div>
        <div className={`${getClassName(['2', 'ě'])} key__two`} id="2">
          <div className="key__two-top">2</div>
          <div className="key__two-bottom">ě</div>
        </div>
        <div className={`${getClassName(['3', 'š'])} key__two`} id="3">
          <div className="key__two-top">3</div>
          <div className="key__two-bottom">š</div>
        </div>
        <div className={`${getClassName(['4', 'č'])} key__two`} id="4">
          <div className="key__two-top">4</div>
          <div className="key__two-bottom">č</div>
        </div>
        <div className={`${getClassName(['5', 'ř'])} key__two`} id="5">
          <div className="key__two-top">5</div>
          <div className="key__two-bottom">ř</div>
        </div>
        <div className={`${getClassName(['6', 'ž'])} key__two`} id="6">
          <div className="key__two-top">6</div>
          <div className="key__two-bottom">ž</div>
        </div>
        <div className={`${getClassName(['7', 'ý'])} key__two`} id="7">
          <div className="key__two-top">7</div>
          <div className="key__two-bottom">ý</div>
        </div>
        <div className={`${getClassName(['8', 'á'])} key__two`} id="8">
          <div className="key__two-top">8</div>
          <div className="key__two-bottom">á</div>
        </div>
        <div className={`${getClassName(['9', 'í'])} key__two`} id="9">
          <div className="key__two-top">9</div>
          <div className="key__two-bottom">í</div>
        </div>
        <div className={`${getClassName(['0', 'é'])} key__two`} id="0">
          <div className="key__two-top">0</div>
          <div className="key__two-bottom">é</div>
        </div>
        <div className={`${getClassName(['=', '%'])} key__two`} id="=">
          <div className="key__two-top">%</div>
          <div className="key__two-bottom">=</div>
        </div>
        <div className={`${getClassName(['ˇ', '´'])} key__two`} id="ˇ">
          <div className="key__two-top">ˇ</div>
          <div className="key__two-bottom">´</div>
        </div>
        <div className="key key__special-key" id="Backspace">
          Back
        </div>
      </div>
      <div className="keyboard__row">
        <div className="key key__special-key" id="Tab">
          Tab
        </div>
        <div className={getClassName(['q'])} id="Q">
          Q
        </div>
        <div className={getClassName(['w'])} id="W">
          W
        </div>
        <div className={getClassName(['e'])} id="E">
          E
        </div>
        <div className={getClassName(['r'])} id="R">
          R
        </div>
        <div className={getClassName(['t'])} id="T">
          T
        </div>
        <div className={getClassName(['z'])} id="Z">
          Z
        </div>
        <div className={getClassName(['u'])} id="U">
          U
        </div>
        <div className={getClassName(['i'])} id="I">
          I
        </div>
        <div className={getClassName(['o'])} id="O">
          O
        </div>
        <div className={getClassName(['p'])} id="P">
          P
        </div>
        <div className={`${getClassName(['ú', '/'])} key__two`} id="Ú">
          <div className="key__two-top">/</div>
          <div className="key__two-bottom">ú</div>
        </div>
        <div className={`${getClassName(['(', ')'])} key__two`} id="ˇ">
          <div className="key__two-top">(</div>
          <div className="key__two-bottom">)</div>
        </div>
        <div className={`${getClassName(["'", '¨'])} key__two`} id="Tab">
          <div className="key__two-top">'</div>
          <div className="key__two-bottom">¨</div>
        </div>
      </div>
      <div className="keyboard__row">
        <div className="key key__special-key" id="CapsLk">
          CapsLk
        </div>
        <div className={getClassName(['a'])} id="A">
          A
        </div>
        <div className={getClassName(['s'])} id="S">
          S
        </div>
        <div className={getClassName(['d'])} id="D">
          D
        </div>
        <div className={getClassName(['f'])} id="F">
          F
        </div>
        <div className={getClassName(['g'])} id="G">
          G
        </div>
        <div className={getClassName(['h'])} id="H">
          H
        </div>
        <div className={getClassName(['j'])} id="J">
          J
        </div>
        <div className={getClassName(['k'])} id="K">
          K
        </div>
        <div className={getClassName(['l'])} id="L">
          L
        </div>
        <div className={`${getClassName(['ů', '"'])} key__two`} id="ů">
          <div className="key__two-top">"</div>
          <div className="key__two-bottom">ů</div>
        </div>
        <div className={`${getClassName(['!', '§'])} key__two`} id="!">
          <div className="key__two-top">!</div>
          <div className="key__two-bottom">§</div>
        </div>
        <div className="key key__special-key" id="Enter">
          Enter
        </div>
      </div>
      <div className="keyboard__row">
        <div className={getLeftShiftClassName()} id="ShiftLeft">
          Shift
        </div>
        <div className={getClassName(['y'])} id="Y">
          Y
        </div>
        <div className={getClassName(['x'])} id="X">
          X
        </div>
        <div className={getClassName(['c'])} id="C">
          C
        </div>
        <div className={getClassName(['v'])} id="V">
          V
        </div>
        <div className={getClassName(['b'])} id="B">
          B
        </div>
        <div className={getClassName(['n'])} id="N">
          N
        </div>
        <div className={getClassName(['m'])} id="M">
          M
        </div>
        <div className={`${getClassName([',', '?'])} key__two`}>
          <div className="key__two-top">?</div>
          <div className="key__two-bottom">,</div>
        </div>
        <div className={`${getClassName(['.', ':'])} key__two`}>
          <div className="key__two-top">:</div>
          <div className="key__two-bottom">.</div>
        </div>
        <div className={`${getClassName(['_', '-'])} key__two`}>
          <div className="key__two-top">_</div>
          <div className="key__two-bottom">-</div>
        </div>
        <div className={getRightShiftClassName()} id="ShiftRight">
          Shift
        </div>
      </div>
      <div className="keyboard__row">
        <div className="key key__special-key" id="Ctrl">
          Ctrl
        </div>
        <div className="key key__special-key" id="Alt">
          Alt
        </div>
        <div className={`key__space ${getClassName([' '])}`} id="space">
          SPACE
        </div>
        <div className="key key__special-key" id="AltGr">
          AltGr
        </div>
        <div className="key key__special-key" id="Ctrl">
          Ctrl
        </div>
      </div>
    </div>
  );
};
