import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isDarkMode ? 'dark' : ''}>
        <Link to='/' className='title'>Home</Link>
        <div className='menu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li>
          <NavLink to='/about'>About</NavLink>  
        </li>
        <li>
            <NavLink to='/hymns'>Hymns</NavLink>
        </li>
        <li>
            <NavLink to='/beliefs'>Beliefs</NavLink>
        </li>
        <li>
            <NavLink to='/prayer'>Prayer </NavLink>
        </li>

      <button onClick={toggleTheme} className='theme-toggle'>
      </button>
      </ul>
    </nav>
  )
}

export default Navbar;
