import React from 'react';
import './style.css';

const Hand = ({ inputText, targetText, exerciseMode, isAlreadyError, fingers, useTransform}) => {

  const { handIndex, handMiddle, handRing, handLittle } = fingers
  let char = targetText[inputText.length];

  if (exerciseMode && isAlreadyError) {
    char = targetText[inputText.length - 1];
  }
  
  return (
    <svg
      className="adaptive__svg" 
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 541 642"
      width="150"
      height="150"
      transform={useTransform ? 'scale(-1, 1)' : ""}
    >
      <title>Hand-svg</title>
      <style></style>
      <g id="g2399">
        <path
          id="polygon2401"
          className="s0"
          d="m268.9 193.3l-0.1 0.2-0.1 0.5-0.1 0.4v0.1 0.1h-0.1l0.1-0.1v-0.1-0.2l0.1-0.2 0.1-0.2 0.1-0.5z"
        />
        <path
          id="polyline2403"
          className="s1"
          d="m164.9 130.8v-1.4l-0.2-1.3v-1.3l-0.1-1.3 0.1-1.3v-1.1l0.2-2.4 0.5-2.2 0.3-1.2 0.2-1 0.4-1 0.4-1 0.5-1 0.4-0.9 1.1-1.8 0.7-0.9 0.6-0.8 0.7-0.9 0.7-0.7 0.8-0.8 0.8-0.7 0.9-0.7 0.9-0.7 1.9-1.2 2.1-1.1 1.1-0.6 1.1-0.5 9.6-0.6 1.7 0.4 1.8 0.4 1.7 0.6 0.7 0.2 0.6 0.3 1.1 0.5 0.4 0.3 0.3 0.3 1 0.7 2.5 3.2 0.9 2.2 0.9 2.4 0.4 1.1 0.3 1.2 0.4 1.1 0.2 1 0.3 0.9 0.3 0.9 0.3 0.8 0.1 0.8 0.3 0.7 0.2 0.6 0.1 0.6 0.2 0.5 0.2 0.4 0.1 0.4 0.1 0.3v0.2l0.8 2.3 0.6 2.2 0.5 2.3 0.3 2.4h0.5l0.1 0.5 0.1 0.7 0.2 0.7 0.1 0.7 0.3 0.8 0.2 0.9 0.2 0.8 0.3 1.1 0.3 0.9 0.3 1.2 0.4 1.1 0.3 1.2 0.5 1.2 0.4 1.4 0.4 1.3 0.5 1.5 1 2.8 0.9 2.7 1 2.6 0.9 2.6 2.9 10.2v1.3l0.2 1.1 0.3 1.3 0.2 0.7 0.1 0.8 0.3 1.8 0.5 1.9 0.2 1 0.3 1.2 0.5 2.4 0.5 2.6 0.4 1.3 0.3 1.5 0.7 3 0.4 1.5 0.3 1.7 0.4 1.7 0.4 1.8 0.4 1.7 0.4 1.9 0.9 3.9 0.4 1.9 0.5 2.1 0.9 4.3 2.1 8.6 2 8.4 0.9 4.2 1 4.1 1.9 8.1 1.6 5.5 1.7 5.5 1 2.8 1 2.7 1 2.7 0.5 1.4 0.3 0.7 0.1 0.3 0.1 0.4 2.2 4.6 0.6 0.8 0.5 0.7 0.2 0.3 0.1 0.2 0.2 0.1 0.1 0.2 0.4 0.1h0.2l0.1 0.1 0.1 0.1h0.3 0.1 0.1 0.3 0.1l0.1 0.1 0.6-0.1 0.5-0.1 0.6-0.2 0.6-0.2 0.5-0.2 0.3-0.2 0.5-0.2 0.1-0.1 0.1-0.1h0.2l0.6-0.5 3.3-6.9 1.8-8.1 1.6-8 1.5-8 1.2-7.9 1-7.8 0.9-7.8 0.6-7.8 0.5-7.7-0.3-0.5 0.8-20.5 0.5-6.1 0.6-5.6 0.6-5.5 0.7-5.5 0.7-5.5 0.8-5.6 0.9-5.5 1-5.5 1-5.4 0.1-0.1v-0.2-0.1-0.1-0.2l0.1-0.4 0.1-0.1v-0.1-0.2l0.1-0.4v-0.5l0.2-2 0.2-1.7v-0.7l0.1-0.8 0.2-1.7 0.1-0.6v-0.2-0.2l0.1-1 0.2-2 0.3-2.3 0.1-1.2 0.1-1.3 0.2-1.3v-0.7l0.1-0.3v-0.3l0.3-2.8 0.3-2.6 0.2-2.5 0.2-2.3 0.2-2.2 0.1-2.2 0.2-2 0.1-1.9 0.1-1.8 0.3-4.8 0.3-4.8 0.4-4.8 0.5-4.7 0.4-2.4 0.5-2.3 0.4-1.2 0.4-1.1 0.9-2.3 0.6-1.3 0.7-1.2 0.8-1.2 0.7-1.1 0.9-1.1 0.9-1 0.9-0.9 0.9-0.8 1-0.9 1.1-0.8 1.1-0.7 1.1-0.7 1.2-0.6 1.3-0.5 1.3-0.5 1.3-0.4 1.4-0.4 1.4-0.2 1.3-0.1 1.4 0.1 1.3 0.1 1.2 0.4 1.3 0.4 1.2 0.6 2 1 1.8 1.2 1.6 1.2 1.4 1.3 1.4 1.4 1.1 1.5 1.1 1.6 0.9 1.7 0.8 1.8 0.3 0.9 0.3 1 0.5 1.9 0.2 2.1 0.2 2v2.3 1.1l-0.1 1.2-0.3 2.4 0.6 6.6 0.4 6.5 0.3 6.5 0.2 6.5 0.2 3.1-0.1 3.2-0.1 3.2-0.2 3.2-0.2 3.4-0.2 3.5-0.2 3.7-0.2 3.9-0.1 1.8-0.1 1.9v1.8l-0.1 1.7-0.1 1.6-0.1 1.6v1.6l-0.1 1.5v1.3 1.4 1.3l-0.1 1.2v1.2 1.1 1 0.5l-0.1 0.5v0.3 0.4 0.6l-0.1 0.8-0.1 0.9-0.1 1.1-0.1 1.1-0.2 1.4-0.1 1.3v0.6l-0.1 0.6-0.1 1v0.3 0.2l-0.1 0.5v0.4l-0.1 0.4v0.7 0.6 0.2l-0.1 0.2v0.2l0.3 3.5 0.1 3.7-0.1 3.6-0.3 3.6-0.1 1.5-0.2 1.7-0.1 1.7-0.2 1.8v1.9l-0.2 2-0.2 2.1-0.1 2.2-0.1 2.3-0.2 2.3-0.1 2.4-0.2 2.6-0.1 2.6-0.2 2.8-0.1 2.8-0.2 3-0.1 2.9-0.2 2.8-0.1 2.8-0.1 2.7-0.1 2.7-0.1 1.3-0.1 1.3v2.5 0.6 0.3l-0.1 0.3-0.1 1.3v1.9 0.9 0.5l-0.1 0.5v3.7l0.1 1.9v1.9l0.2 3.6 0.3 3.6 0.4 3.7 0.5 3.6 0.6 3.8 0.4 1.1 3.2 12.3 3.8 3.8 0.5 0.1 0.3-0.1 0.2-0.1 0.1-0.2 0.4-1 0.3-1 0.3-1.1 0.4-1.2 0.4-1.3 0.4-1.3 0.4-1.4 0.4-1.4 0.3-0.8 0.2-0.8 0.4-1.7 0.5-1.7 0.5-1.8 0.5-1.8 0.5-2 0.6-2 0.5-2 4-15.6 0.4-0.2 1.3-4.7 1.2-4.4 1.1-4.2 1-4 1-3.7 1-3.5 0.8-3.4 0.8-3 0.8-2.8 0.7-2.5 0.7-2.5 0.6-2.2 0.6-2.2 0.6-2 0.5-1.8 0.5-1.7 0.5-1.5 0.4-1.4 0.4-1.3 0.4-1.1 0.3-1 0.3-0.8 0.3-0.7 0.2-0.5 0.5-0.3 0.6-5.3 0.8-5.2 0.9-5.2 1-5 1.2-5.1 1.3-5 1.4-5 1.5-4.8 1.8-4.9 1.8-4.8 2-4.8 2-4.6 2.3-4.7 2.3-4.5 2.5-4.6 2.6-4.4 0.8-1.1 0.9-0.9 1-0.8 1-0.7 1.1-0.6 1.2-0.6 1.2-0.5 1.2-0.3 1.7-0.5 1.7-0.2 1.6-0.2h1.5l1.5 0.1 1.4 0.3 1.4 0.3 1.3 0.5 1.4 0.6 1.2 0.7 1.2 0.8 1.2 1 1.1 1.1 1 1.2 1.1 1.3 0.9 1.5 0.9 1.7 0.2 1.2 0.3 1.4 0.1 1.5 0.2 1.7 0.1 1.8v2l0.1 2.1-0.1 2.3v2.3 2.2l-0.1 2.1-0.2 2-3.6 24.2-0.4 0.2-0.6 3.4-0.6 3.2-0.3 1.5-0.1 0.8-0.2 0.8-0.2 1.5-0.1 0.3-0.1 0.4-0.1 0.8-0.1 0.7-0.1 0.3-0.1 0.4-0.2 1.4-0.5 2.7-0.1 1.3-0.3 1.2-0.1 1.3-0.1 0.6v0.1l-0.1 0.2v0.3l-0.4 3.1-0.4 3-0.1 1.5-0.2 1.4-0.3 3-0.1 2.8-0.1 1.4-0.1 1.4-0.1 2.6v1.4 1.3l-2 13.4-0.2 1.8-0.3 1.7-0.3 1.7v0.1 0.2l-0.1 0.5-0.2 0.8-0.2 1.6-0.3 1.5-0.2 1.5-0.2 0.7-0.2 0.7v0.6l-0.2 0.7-0.2 1.3-0.6 2.4-0.1 1.1-0.3 1-0.1 0.5-0.1 0.5-0.3 1-0.2 1.2-0.3 1.4-0.3 1.5-0.4 1.8-0.3 1.9-0.4 2.2-0.4 2.3-0.5 2.6-0.3 2.2-0.2 1.1-0.2 1.1-0.4 2-0.1 1-0.1 0.4-0.2 0.6-0.3 1.7-0.4 1.7-0.3 1.5-0.2 0.7-0.1 0.3v0.2l-0.1 0.2-0.1 0.8-0.1 0.9-0.1 0.6-0.1 0.6v0.5 0.3 0.3l-0.1 0.2-0.1 0.4-0.1 0.5-0.1 0.5-0.1 0.7-0.1 0.6-0.1 0.8-0.3 1.8-0.1 1.7-0.2 1.7-1.2 4-1.2 4.2-0.9 4.2-0.9 4.4-0.7 4.4-0.6 4.5-0.4 4.5-0.3 4.8 0.6 0.7 1.9 0.1 1.7-0.5 1.7-1.1 1.6-1.1 3.2-2.3 1.6-1.2 1.5-1.2 1.5-1.4 1.4-1.2 2.8-2.8 2.7-2.9 1.3-1.6 1.2-1.5 2.4-3.2 2.1-1.6 2-1.6 1.9-1.7 1.8-1.8 1.8-1.9 1.6-1.9 1.6-1.9 1.4-2 10.7-13.2v-0.6l5.9-6.9 0.5-0.1 4.9-6.1 4.8-6.1 4.8-6.1 4.7-6.3 0.9-1.1 0.7-1.2 0.8-1.2 0.6-1.2 0.4-0.6 0.4-0.6 0.3-0.6 0.3-0.6 0.7-1.7 0.8-1.5 0.8-1.5 0.8-1.3 0.9-1.3 1-1.3 1.1-1.2 1-1 1.2-1.1 1.2-0.9 1.2-0.9 1.3-0.8 1.4-0.8 1.4-0.7 1.5-0.6 1.5-0.5 1.6-0.4 1.6-0.2 1.6 0.1 1.6 0.3 1.4 0.3 1.2 0.5 1.3 0.5 1.1 0.7 1.2 0.8 1 0.9 1 1 0.9 1.1 1.4 2.1 1.2 2.2 0.9 2 0.5 2.1 0.5 2.4 0.2 1.2 0.1 1.2v2.4l-0.1 1.2-0.2 1.2-0.3 2.4-0.7 2.4-0.4 1.1-0.5 1.2-1.2 2.4-4.5 8.4-2.1 4-2.3 4.1-4.5 7.9-0.5 0.9-0.3 0.5-0.3 0.5-1.1 2-2.3 3.8-2.2 3.8-2.2 3.7-4.5 7.2-2.2 3.5-2.3 3.5-2.2 3.5-2.2 3.4-0.7 1.4-1.4 2-1.5 2-1.5 1.9-1.8 1.8-1.7 1.8-1.8 1.6-1.9 1.6-2 1.5-0.5 1.1-0.5 1-0.7 0.9-0.8 0.9-1.3 1.4-1.3 1.5-2.4 3-2.2 3.1-2.1 3.3-1.8 3.3-1.7 3.6-1.5 3.6-0.6 1.9-0.7 1.9-0.7 2.3-0.2 0.5-0.1 0.3v0.1l-0.1 0.2-0.2 0.5-0.2 0.5-0.1 0.2-0.1 0.2-0.1 0.4-0.4 0.7-0.3 0.6-0.1 0.2-0.2 0.3-0.3 0.5v0.2l-0.2 0.3-0.3 0.9-0.2 1v0.2l-0.1 0.2-0.1 0.4v0.1l-0.1 0.1v0.2l-0.2 0.3-0.6 1.2-0.7 1-0.7 0.9-0.9 0.8-0.1 0.9-0.2 1-0.1 1.2-0.3 1.3-0.2 1.4-0.3 1.5-0.3 1.7-0.4 1.8-0.3 2-0.2 0.9-0.1 0.8-0.2 0.8-0.2 0.7v0.6l-0.2 0.6-0.1 0.6-0.1 0.5v0.2 0.1l-0.1 0.1-0.1 0.4v0.1 0.2l-0.1 0.3-0.1 0.3v0.1l-1.2 6.9-3.5 17.7-0.5 2.4-0.1 0.5-0.1 0.6-0.3 1.2-0.1 1.1-0.1 0.6-0.2 0.6-0.4 2.2-0.3 2.2-0.5 2.1-0.3 2-0.2 0.9-0.2 1.1-0.1 0.4-0.1 0.5-0.1 0.9-0.4 1.8-0.2 1.7v0.2l-0.1 0.2-0.1 0.4-0.2 0.9-0.2 1.6-0.3 1.5-0.2 1.4-0.3 1.5-0.3 0.3-1.5 10-0.3 0.4v0.2 0.2l-0.1 0.4-0.2 0.8-0.3 1.7-0.7 3.4-1.4 6.6-0.6 3.2-0.7 3.1-0.7 3.1-0.7 3.1-0.2 0.9-0.2 1-0.3 0.9-0.4 0.9-0.4 0.9-0.5 0.8-0.5 0.9-0.5 0.9-1.4 2.3-1.4 2.3-1 2.3-0.5 1.1-0.4 1.2-0.7 2.3-0.5 2.4-0.4 2.3-0.2 2.4 0.1 2.3 0.1 1.2 0.1 1.1 0.5 2.3 0.2 1.2 0.3 1.2 0.8 2.3 1 2.4 0.6 1.2 0.6 1.2 1.3 2.4 2.3 5.4 0.7 1.4 0.6 1.4 0.6 1.2 0.5 1.2 0.4 1.1 0.5 0.9 0.4 0.8 0.3 0.9 0.3 0.7 0.1 0.9-0.1 0.8-0.4 0.9-0.5 0.9-0.8 1-1 1-1.3 1-1.4 1-1.7 1.1-1.8 1.1-2.1 1.1-2.3 1.1-2.5 1.2-2.7 1.2-2.9 1.2-2.6 1.1-2.7 1-2.8 1-3 1.1-3 1-3.2 1-3.3 1.1-3.4 1.1-3.5 1.1-3.7 1.1-3.8 1.1-3.9 1.1-4 1.1-4.1 1.1-4.2 1.1-4.4 1.2-3.7 1-3.8 0.9-1.8 0.4-0.5 0.1-0.5 0.1-0.9 0.3-3.8 0.9-3.7 0.9-3.6 0.9-0.9 0.1-0.4 0.1-0.5 0.2-1.9 0.4-3.6 0.8-1.7 0.4-0.9 0.1-0.4 0.1-0.5 0.2-3.6 0.7-3.5 0.7-3.5 0.8-0.4 0.1h-0.4l-0.9 0.2-1.8 0.4-3.4 0.6-3.4 0.7-3.4 0.7-3 0.5-1.4 0.2-1.4 0.2-2.6 0.5-2.5 0.4-1.2 0.1-1.2 0.2h-0.5l-0.5 0.1-1.1 0.2-2.1 0.2-1.8 0.3h-0.9l-0.8 0.1-0.8 0.1-0.8 0.1h-0.6-0.6-0.6-0.5l-0.5-0.1h-0.4l-0.6-0.1-0.2-0.1h-0.2v-0.1l-0.1-0.1-0.1-0.1-0.2-0.9-0.4-0.9-0.4-0.8-0.4-0.8-0.5-0.9-0.5-0.9-1.1-2-0.6-1.1-0.6-1.1-0.6-1.3-0.7-1.2-0.7-1.3-0.8-1.4-0.7-1.5-0.9-1.5-0.8-1.5-0.9-1.6-6.5-11.9-1.6-0.9-0.8-0.5-0.8-0.4-3.2-1.8-3.1-1.9-1.5-1-1.5-0.9-1.2-0.6-0.6-0.2-0.6-0.2-0.5-0.3-0.6-0.3-1.1-0.5-0.4-0.3-0.6-0.3-1-0.6-0.9-0.7-1-0.6-0.2-0.2-0.2-0.2-0.4-0.3-0.2-0.2-0.2-0.2-0.5-0.3-0.7-0.8-0.8-0.8-0.6-0.8-0.7-0.9-0.6-0.9-0.6-0.9-2.9-2.7-7.7-7.5-7.2-7.7-6.1-5.8-17.1-18.9-1.7-1.8-3.9-3.4-1.4-1.3-3.4-3.3-3.5-3.2-3.4-3.1-3.6-2.9-0.4-0.1-13-13.1-6.5-11.5-3.9-12.3-1.3-3.2-1.9-5.2-1-2.6-1.2-2.5-1.2-2.4-1.3-2.4-1.4-2.4-1.4-2.3-3-4.6-1.6-2.2-1.7-2.1-1.8-2.1-1.9-2.1-1.9-2-2-2-0.1-0.2-0.2-0.2-0.1-0.2-0.2-0.3-0.2-0.3-0.3-0.3-0.6-0.8-0.3-0.5-0.5-0.5-0.4-0.6-0.4-0.6-0.5-0.6-0.6-0.6-1.1-1.6-0.5-0.8-0.6-0.7-0.5-0.7-0.4-0.6-1-1.3-0.7-1.1-0.7-1.1-0.6-1-0.5-0.8"
        />
        <path
          id="polyline2405"
          className="s1"
          d="m81.1 386.8l-0.6-1.4-0.7-1.3-0.7-1.3-0.9-1.3-0.8-1.2-0.9-1.1-1.9-2.2-4.3-4.6-2.2-2.2-2.3-2.2-4.5-4.3-4.7-4.2-4.7-4.1-4.8-4.1-5-3.8-5-3.8-0.5-0.8-0.4-0.6-0.2-0.6-0.1-0.2-0.1-0.1-0.2-0.7-0.2-0.7-0.1-0.7-0.1-0.7v-1.6l0.2-1.6 0.1-0.8 0.3-0.8 0.2-0.8 0.3-0.6 0.6-1.2 0.7-0.9 0.7-1 0.7-0.8 0.9-0.8 0.8-0.6 1-0.6 0.9-0.5 3.6-1.6 3.5-1.3 3.6-1.1 3.5-0.8 3.6-0.7 1.8-0.3 1.7-0.1 3.6-0.2h3.5l3.6 0.2 3.6 0.5 3.6 0.6 1.8 0.5 1.7 0.5 3.6 1.1 3.6 1.3 3.6 1.6 3.6 1.8 1.4 0.7 1.4 0.8 1.5 0.7 1.6 0.9 1.6 0.8 0.8 0.4 0.7 0.4 1.4 0.8 1.2 0.8 1.2 0.6 0.5 0.3 0.5 0.3 0.9 0.6 0.5 0.3 0.3 0.3 3.9 4.2 3.2 6 3.6 11 1.1 1.9 0.3 0.4 0.2 0.4 0.2 0.3 0.2 0.3 0.1 0.2 0.1 0.2v0.1 0.1l2.5 3.7 2.4 2.8 3.6 3.5 1.1 1.1 1.3 1.2 1.5 1.4 1.7 1.4 0.9 0.8 0.9 0.7 2.1 1.7 2.1 1.7 2.4 1.8 3.1 2.2 3.3 2.3 2.7 1.9 7.1 0.2 2.4-2.1 2.2-2.1 2.2-2.2 2.1-2.3 2.1-2.3 1.8-2.5 1.9-2.5 1.7-2.5 0.1-0.1v-0.1l0.1-0.2 0.2-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0.1-0.1 0.2-0.3 0.1-0.1 0.2-0.2 0.1-0.2 0.8-1 0.5-0.8 0.3-0.3 0.2-0.3 0.1-0.2 0.1-0.2 1.5-2.3 1.2-2.3 1.1-2.4 0.5-1.2 0.4-1.2 0.8-2.5 0.6-2.6 0.5-2.6 0.3-2.6 0.5-5.5 0.3-5.4 0.2-5.5v-5.3-5.5l-0.2-5.3-0.3-5.4-0.5-5.4-0.5-5.4-0.7-5.3-0.9-5.4-1-5.4-1.1-5.3-1.2-5.4-1.3-5.4-1.6-5.3-14.8-94.2-1.5-9-1.5-9-1.3-9.1-1.2-9"
        />
        {handLittle.includes(char) ? 
          <path
          id="little"
          className="s2"
          d="m469.2 273.3c-9.2-4.7-10.6-20.7-3.1-35.8 7.5-15.1 21.1-23.5 30.3-18.8 9.3 4.7 10.7 20.7 3.2 35.8-7.5 15.1-21.1 23.5-30.4 18.8z"
          />
          : null
        }
        
        {handRing.includes(char) ? 
          <path
          id="ring"
          className="s2"
          d="m381.9 180c-10.1-3-15.1-19.8-11.1-39.3 4.5-21.3 18-38 30.2-35.3 12.5 2.7 16.9 24.1 10.3 45.8-6.1 19.6-19 31.8-29.4 28.8z"
          />
          : null
        }
        
        {handMiddle.includes(char) ? 
          <path
          id="middle"
          className="s2"
          d="m299.6 126.1c-10.2-1.3-18.6-15.4-18.8-34.4-0.3-22.9 11.1-43.5 25.5-41.4 14.2 2.1 21.6 25.2 17.5 47.2-3.5 18.3-14 29.9-24.2 28.6z"
          />
          : null
        }
        
        {handIndex.includes(char) ? 
          <path
          id="index"
          className="s2"
          d="m193.5 168.4c-6 1.1-13.9-2.4-19.7-11.3-11.7-18.2-13.4-56.7 11.9-56.2 22 0.4 27.9 33.4 22.6 51.3-2.9 9.4-8.9 15.1-14.8 16.2z"
          />
          : null
        }
        {char === " " ? 
          <path
          id="thumb"
          className="s2"
          d="m68.9 359c-20.2-3.9-34.7-15.2-32.6-25.4 2.2-10.3 20.5-15.6 41.1-11.8 20.7 3.8 35.5 15.4 33 25.8-2.6 10.2-21.2 15.3-41.5 11.4z"
          />
          : null
        }
        
      </g>
    </svg>
  );
};

export default Hand;
