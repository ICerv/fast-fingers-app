import React, { useState } from 'react';
import { lefttShiftSymbol } from '../../../pages/generalConstants';
import { rightShiftSymbol } from '../../../pages/generalConstants';
import './style.css';

export const Keyboard = ({ targetText, inputText, isAlreadyError, exerciseMode }) => {
  let char = targetText[inputText.length];

  if (exerciseMode && isAlreadyError) {
    char = targetText[inputText.length - 1];
  }

  const getClassName = (keyArray) => {
    const errorChar = inputText.slice(-1);
    if (isAlreadyError && keyArray.includes(errorChar.toLowerCase())) {
      return 'key wrong';
    }

    let isActive = false;
    if (char) {
      isActive = keyArray.some((key) => key === char.toLowerCase());
    }

    return isActive ? 'key active' : 'key';
  };

  const getRightShiftClassName = () => {
    const hasCapitalLetter = rightShiftSymbol.includes(char);

    return hasCapitalLetter ? 'key special-key active' : 'key special-key';
  };

  const getLeftShiftClassName = () => {
    const hasCapitalLetter = lefttShiftSymbol.includes(char);

    return hasCapitalLetter ? 'key special-key active' : 'key special-key';
  };

  return (
    <div className="keyboard">
      <div className="row row-1">
        <div className={`${getClassName([';', '°'])} key_two`} id=";">
          <div className="top">°</div>
          <div className="bottom">;</div>
        </div>
        <div className={`${getClassName(['1', '+'])} key_two`} id="1">
          <div className="top">1</div>
          <div className="bottom">+</div>
        </div>
        <div className={`${getClassName(['2', 'ě'])} key_two`} id="2">
          <div className="top">2</div>
          <div className="bottom">ě</div>
        </div>
        <div className={`${getClassName(['3', 'š'])} key_two`} id="3">
          <div className="top">3</div>
          <div className="bottom">š</div>
        </div>
        <div className={`${getClassName(['4', 'č'])} key_two`} id="4">
          <div className="top">4</div>
          <div className="bottom">č</div>
        </div>
        <div className={`${getClassName(['5', 'ř'])} key_two`} id="5">
          <div className="top">5</div>
          <div className="bottom">ř</div>
        </div>
        <div className={`${getClassName(['6', 'ž'])} key_two`} id="6">
          <div className="top">6</div>
          <div className="bottom">ž</div>
        </div>
        <div className={`${getClassName(['7', 'ý'])} key_two`} id="7">
          <div className="top">7</div>
          <div className="bottom">ý</div>
        </div>
        <div className={`${getClassName(['8', 'á'])} key_two`} id="8">
          <div className="top">8</div>
          <div className="bottom">á</div>
        </div>
        <div className={`${getClassName(['9', 'í'])} key_two`} id="9">
          <div className="top">9</div>
          <div className="bottom">í</div>
        </div>
        <div className={`${getClassName(['0', 'é'])} key_two`} id="0">
          <div className="top">0</div>
          <div className="bottom">é</div>
        </div>
        <div className={`${getClassName(['=', '%'])} key_two`} id="=">
          <div className="top">%</div>
          <div className="bottom">=</div>
        </div>
        <div className={`${getClassName(['ˇ', '´'])} key_two`} id="ˇ">
          <div className="top">ˇ</div>
          <div className="bottom">´</div>
        </div>
        <div className="key special-key" id="Backspace">
          Back
        </div>
      </div>
      <div className="row row-2">
        <div className="key special-key" id="Tab">
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
        <div className={`${getClassName(['ú', '/'])} key_two`} id="Ú">
          <div className="top">/</div>
          <div className="bottom">ú</div>
        </div>
        <div className={`${getClassName(['(', ')'])} key_two`} id="ˇ">
          <div className="top">(</div>
          <div className="bottom">)</div>
        </div>
        <div className={`${getClassName(["'", '¨'])} key_two`} id="Tab">
          <div className="top">'</div>
          <div className="bottom">¨</div>
        </div>
      </div>
      <div className="row row-3">
        <div className="key special-key" id="CapsLk">
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
        <div className={`${getClassName(['ů', '"'])} key_two`} id="ů">
          <div className="top">"</div>
          <div className="bottom">ů</div>
        </div>
        <div className={`${getClassName(['!', '§'])} key_two`} id="!">
          <div className="top">!</div>
          <div className="bottom">§</div>
        </div>
        <div className="key special-key" id="Enter">
          Enter
        </div>
      </div>
      <div className="row row-4">
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
        <div className={`${getClassName([',', '?'])} key_two`}>
          <div className="top">?</div>
          <div className="bottom">,</div>
        </div>
        <div className={`${getClassName(['.', ':'])} key_two`}>
          <div className="top">:</div>
          <div className="bottom">.</div>
        </div>
        <div className={`${getClassName(['_', '-'])} key_two`}>
          <div className="top">_</div>
          <div className="bottom">-</div>
        </div>
        <div className={getRightShiftClassName()} id="ShiftRight">
          Shift
        </div>
      </div>
      <div className="row row-5">
        <div className="key special-key" id="Ctrl">
          Ctrl
        </div>
        <div className="key special-key" id="Alt">
          Alt
        </div>
        <div className={`space ${getClassName([' '])}`} id="space">
          SPACE
        </div>
        <div className="key special-key" id="AltGr">
          AltGr
        </div>
        <div className="key special-key" id="Ctrl">
          Ctrl
        </div>
      </div>
    </div>
  );
};
