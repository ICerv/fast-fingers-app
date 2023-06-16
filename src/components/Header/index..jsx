import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <header>
        <div className="site-logo_container">
          <div className="site-logo"></div>
        </div>
        <div className="navigation">
          <button className={`nav-btn ${!navOpen ? 'menu' : 'cross'}`} onClick={toggleNav}></button>
          <div className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>
            <Link to="/" onClick={closeNav}>Domů</Link>
            <Link to="/introduction" onClick={closeNav}>Úvod</Link>
            <Link to="/lessons" onClick={closeNav}>Cvičení</Link>
            <Link to="/tests" onClick={closeNav}>Testy</Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
