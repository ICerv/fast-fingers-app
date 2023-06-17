import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ErrorPage = () => {
  return (
    <div className="error__container">
      <h1 className="error__number">404</h1>
      <h2 className="error__title">Oops! Špatná klávesa</h2>
      <p className="error__text">Zdá se, že jste sáhli na neexistující klávesu</p>
      <Link to="/">Zpět na domovskou stránku FastFingers</Link>
    </div>
  );
};

export default ErrorPage;
