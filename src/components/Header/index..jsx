import React, { useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import './style.css';

const Header = () => {

  const navigate = useNavigate();

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
        <div className="header__logo" onClick={() => navigate('/')}></div>
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
          <Link to="/lessons" className={(activePage === '/lessons' || activePage.includes('lesson')) ? 'header__active' : ''} onClick={closeNav}>
            Cvičení
          </Link>
          <Link to="/tests" className={(activePage === '/tests' || activePage.includes('test')) ? 'header__active' : ''} onClick={closeNav}>
            Testy
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
