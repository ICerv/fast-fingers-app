import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">FastFingers</div>
        <div className="footer__text">
          &copy;2023 -{' '}
          <a href="https://www.czechitas.cz" target="_blank" rel="noopener noreferrer" className="footer__link">
            Czechitas, Digitální akademie: Web
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
