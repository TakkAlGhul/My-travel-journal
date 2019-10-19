import React from 'react';
import { Link } from "gatsby";
import { window } from 'browser-monads';
import { FaHome, FaBook, FaUser, FaEnvelope } from 'react-icons/fa';
import './sidenav.css';

const Sidenav = (props) => {
  let sidenavClass = 'side-nav';
  if (props.show) {
    sidenavClass = 'side-nav open'
  }
  return (
    <nav className={sidenavClass}>
      <ul>
        <li><Link to="/" className="nav__link-sp"><FaHome />TOP</Link></li>
        <li><Link className={window.location.href.indexOf('blog') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/blog'><FaBook />Blog</Link></li>
        <li><Link className={window.location.href.indexOf('about') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/about'><FaUser />About</Link></li>
        <li><Link className={window.location.href.indexOf('contact') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/contact'><FaEnvelope />Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Sidenav;
