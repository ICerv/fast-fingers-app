import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  const location = useLocation();
  const activePage = location.pathname;

  return (
    <header>
      <div className="site-logo_container">
        <div className="site-logo"></div>
      </div>
      <div className="navigation">
        <button className={`nav-btn ${!navOpen ? 'menu' : 'cross'}`} onClick={toggleNav}></button>
        <div className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>
          <Link to="/" className={activePage === '/' ? 'active' : ''} onClick={closeNav}>
            Domů
          </Link>
          <Link to="/introduction" className={activePage === '/introduction' ? 'active' : ''} onClick={closeNav}>
            Úvod
          </Link>
          <Link to="/lessons" className={activePage === '/lessons' ? 'active' : ''} onClick={closeNav}>
            Cvičení
          </Link>
          <Link to="/tests" className={activePage === '/tests' ? 'active' : ''} onClick={closeNav}>
            Testy
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;