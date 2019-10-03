import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/LogoMakr_8eU52W.png';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nav__items">
        <a href="/" className="nav__left"><img src={logo} alt="Travel journal icon" className="nav__logo" /></a>
        <a href="/" className="nav__title">Million Miles</a>
        <Link className={window.location.href.indexOf('blog') > 0 ? 'nav__link active' : 'nav__link'} to='/blog'>Blog</Link>
        <Link className={window.location.href.indexOf('about') > 0 ? 'nav__link active' : 'nav__link'} to='/about'>About</Link>
        <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__link active' : 'nav__link'} to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Nav;
