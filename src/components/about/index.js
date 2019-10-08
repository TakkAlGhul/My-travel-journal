import React from 'react';
import Info from './myInfo';
import './about.css';
import aboutHeader from '../../images/Brescia-8161479.jpg' 

const aboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-hero" style={{backgroundImage: `url(${aboutHeader})`}}></div>
      <div className="about-title">
        <h1 className="about-me">About Me</h1>
      </div>
      <Info />
    </div>
  )
}

export default aboutMe;
