import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header>
        <div className="site-logo_container">
          <div className="site-logo"></div>
        </div>
        <div className="navigation">
          <button className="nav-btn" onClick={toggleNav}></button>
          <div className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>
            <Link to="/">Domů</Link>
            <Link to="/introduction">Úvod</Link>
            <Link to="/lessons">Cvičení</Link>
            <Link to="/tests">Testy</Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
