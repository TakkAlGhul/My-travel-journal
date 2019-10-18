import React from 'react';
import { Link } from "gatsby";
import { window } from 'browser-monads';
import './sidenav.css';

const Sidenav = (props) => {
  let sidenavClass = 'side-nav';
  if (props.show) {
    sidenavClass = 'side-nav open'
  }
  return (
    <nav className={sidenavClass}>
      <ul>
        <li><Link to="/" className="nav__title">Million Miles</Link></li>
        <li><Link className={window.location.href.indexOf('blog') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/blog'>Blog</Link></li>
        <li><Link className={window.location.href.indexOf('about') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/about'>About</Link></li>
        <li><Link className={window.location.href.indexOf('contact') > 0 ? 'nav__link-sp active' : 'nav__link-sp'} to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Sidenav;
