import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
        <Link to='/' className='title'>Home</Link>
        <div className='menu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <ul>
        <li>
          <NavLink to='/about'>About</NavLink>  
        </li>
        <li>
            <NavLink to='/hymns'>Hymns</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/beliefs'>Beliefs</NavLink>
        </li>
        <li>
            <NavLink to='/prayer'>Prayer </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar;
