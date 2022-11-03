import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import '../css/Footer.css';

function Footer() {






  return (
    <footer className="footer">
      <div className="fot-linkpoint" id="contactSection"></div>
      <div className="fotDiv">
        <h3 className="fotH">Get in touch</h3>

        <ul className="fotList">
          <li className="fotLi"><FaMapMarkerAlt className="icons" /> Sweden/Stockholm</li>
          <li className="fotLi"><FaEnvelope className="icons" /> Stephano@live.se</li>
          <li className="fotLi"><FaPhone className="icons" /> 0739883407 </li>

        </ul>

      </div>
      <p className="port-fot-inf">portfolio still in process..</p>
    </footer>
  );
}

export default Footer;
