import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import '../css/Footer.css';

function Footer() {






  return (
    <footer className="footer">
      <div className="fotGrid">
        <div className="fotDiv">
          <h3 className="fotH">Get in touch</h3>

          <ul className="fotList">
            <li className="fotLi"><FaMapMarkerAlt className="icons" /> Sweden/Stockholm</li>
            <li className="fotLi"><FaEnvelope className="icons" /> Stephano@live.se</li>
            <li className="fotLi"><FaPhone className="icons" /> 0734123125</li>

          </ul>

        </div>


        <div className="fotDiv2">
          <h3 className="fotH">About</h3>
          <p className="aboutP">A focused developer always looking to strive and evovle with the team, aiming for new heights with each projects.</p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
