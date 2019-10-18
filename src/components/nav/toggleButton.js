import React from 'react';
import { FaBars } from 'react-icons/fa';
import './sidenav.css';

const ToggleButton = (props) => {
  return (
    <a className="toggle-button" onClick={props.click}>
      <FaBars />
    </a>
  )
}

export default ToggleButton;
