import React, { Component } from 'react';
import Nav from './index';
import Sidenav from './sidenav';
import Backdrop from '../backdrop/backdrop';

class navigations extends Component {
  state = {
    sideNavOpen: false
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {sideNavOpen: !prevState.sideNavOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideNavOpen: false});
  };

  render() {
    let sideNav;
    let backDrop;

    if (this.state.sideNavOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Nav toggleButtonClickHandler={this.toggleButtonClickHandler} />
        <Sidenav show={this.state.sideNavOpen} />
        {backDrop}
      </div>
    )
  }
}



export default navigations;
