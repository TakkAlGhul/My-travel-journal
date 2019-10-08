import React from 'react';
import './about.css';
import myImg from '../../images/IMG_5588.jpg';

const myInfo = () => {
  return (
    <div className="info-wrapper">
      <div className="my-image"><img src={myImg} alt="myImage"/></div>
      <div className="my-profile">
        <h2 className="my-name">TAKURO YAKUBO</h2>
        <h4>Web Developer, Travel Photographer</h4>
        <div className="my-detail">
          <div>獨協大学外国語学部ドイツ語学科卒。在学中はドイツに一年間留学してました。
          これまでヨーロッパを中心に３０カ国以上を旅してきました。
          写真と一緒に、ひとり旅、留学、国際交流、語学、テクノロジーに関して発信していきます。
          </div>
        </div>
      </div>
    </div>
  )
};

export default myInfo;
