import React from 'react';
import './style.css';

const Results = ({ name, data, symbol }) => {
  return (
    <div className="result__item">
      {name}
      <p className="result__value">
        {data}
        {symbol && data > 0 ? <small>{symbol}</small> : ''}
      </p>
    </div>
  );
};
export default Results;
