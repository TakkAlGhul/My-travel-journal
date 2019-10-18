import React from 'react';
import { Link } from "gatsby";
import './footer.css';
import { FaLinkedin, FaGithubSquare, FaSearch, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <Link to="https://www.linkedin.com/in/takuro-yakubo-50a008159/" rel="noopener noreferrer" target="_blank">
          <FaLinkedin />
        </Link>

      {/* {GitHub} */}
        <Link to="https://github.com/TakkAlGhul" rel="noopener noreferrer" target="_blank">
          <FaGithubSquare />
        </Link>

      {/* {Qiita} */}
      <Link to="https://qiita.com/takk0715" rel="noopener noreferrer" target="_blank">
        <FaSearch />
      </Link>

      {/* {Instagram} */}
        <Link to="https://www.instagram.com/takk.eats.world/?hl=ja" rel="noopener noreferrer" target="_blank">
          <FaInstagram />
        </Link>

      {/* {Twitter} */}
        <Link to="https://twitter.com/JB48922467" rel="noopener noreferrer" target="_blank">
          <FaTwitter />
        </Link>
      </div>
      <div className="copy">
        © Milion Miles by Takuro Yakubo
      </div>
    </div>
  )
}

export default Footer;
