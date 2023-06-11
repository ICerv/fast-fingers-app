import React from "react";
import "./style.css";

const Results = ({ name, data, symbol }) => {
  return (
    <div className="result-item">
      {name}
      <span className="result-value">
        {data}
        {symbol && data > 0 ? <small>{symbol}</small> : ""}
      </span>
    </div>
  );
};
export default Results;
