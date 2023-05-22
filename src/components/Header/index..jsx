import React, { useState } from 'react'
import './style.css'

const Header = () => {
    const [ navOpen, setNavOpen] = useState(false)
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <header>
            <div className="header__content container">
                <div className="site-logo_container">
                    <div className="site-logo"></div>
                </div>
                <div className="navigation">
                <button className="nav-btn" onClick={toggleNav}></button>
                    <nav className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>
                        <a>Domů</a>
                        <a>Cvičení</a>
                        <a>Testy</a>
                    </nav>
                </div>
            </div> 
        </header>
    )
}

export default Header