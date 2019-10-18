import React from 'react';
import { Link } from 'gatsby';
import myImg from '../../images/IMG_5588.jpg';
import './author.css';

const Author = () => {
  return (
    <div className="author">
      <Link to='/about' className="profile-image">
        <img src={myImg} alt="myImage"/>
      </Link>
      <div className="profile-text">
        <h4><span>Author: </span>Takuro Yakubo</h4>
        <p>
          獨協大学外国語学部ドイツ語学科卒。在学中はドイツに一年間留学してました。
          これまでヨーロッパを中心に３０カ国以上を旅してきました。
          写真と一緒に、ひとり旅、留学、国際交流、語学、テクノロジーに関して発信していきます。
        </p>
      </div>
    </div>
  )
}

export default Author;
