import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Header = () => {
  // State for navigation toggle
  const [navOpen, setNavOpen] = useState(false);

  // Toggle navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Close navigation
  const closeNav = () => {
    setNavOpen(false);
  };

  // Get current location
  const location = useLocation();
  const activePage = location.pathname;

  return (
    <header>
      <div className="header__logo-container">
        <div className="header__logo"></div>
      </div>
      <div className="header__navigation">
        <button
          className={`header__nav-btn ${!navOpen ? 'header__menu' : 'header__cross'}`}
          onClick={toggleNav}
        ></button>
        <div className={`header__rollout-nav ${!navOpen ? 'header__nav-closed' : ''}`}>
          <Link to="/" className={activePage === '/' ? 'header__active' : ''} onClick={closeNav}>
            Domů
          </Link>
          <Link
            to="/introduction"
            className={activePage === '/introduction' ? 'header__active' : ''}
            onClick={closeNav}
          >
            Úvod
          </Link>
          <Link to="/lessons" className={activePage === '/lessons' ? 'header__active' : ''} onClick={closeNav}>
            Cvičení
          </Link>
          <Link to="/tests" className={activePage === '/tests' ? 'header__active' : ''} onClick={closeNav}>
            Testy
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
