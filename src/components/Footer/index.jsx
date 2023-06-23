import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">
          <a href="/" className="footer__link-home">
            FastFingers
          </a>
        </div>
        <div className="footer__text">
          <p className="footer__copyright"> &copy;2023</p>
          <span className="footer__separator"> - </span>
          <a href="https://www.czechitas.cz" target="_blank" className="footer__link-czechitas">
            Czechitas, Digitální akademie: Web
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
