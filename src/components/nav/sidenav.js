import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import './sidenav.css';

class Sidenav extends Component {
  state = {
    stete: {
      sideNav: false
    }
  }

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }
    return (
      <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav">
          3
        </span>
        <div onClick={this.navCoverClick} className="nav-cover" style={navCoverStyle} />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
        <Link className={window.location.href.indexOf('blog') > 0 ? 'nav__link active' : 'nav__link'} to='/blog'>Blog</Link>
        <Link className={window.location.href.indexOf('about') > 0 ? 'nav__link active' : 'nav__link'} to='/about'>About</Link>
        <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__link active' : 'nav__link'} to='/contact'>Contact</Link>
        </div>
      </React.Fragment>
    )
  }
}
 
export default Sidenav;
