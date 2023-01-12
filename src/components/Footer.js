import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import '../css/Footer.css';

function Footer() {






  return (
    <footer className="footer">

      <div className="fotDiv">
        <h3 className="fotH" >contact info</h3>

        <ul className="fotList">
          <li className="fotLi"><FaMapMarkerAlt className="icons" /> Sweden/Stockholm</li>
          <li className="fotLi"><FaEnvelope className="icons" /> Stephano@live.se</li>
          <li className="fotLi"><FaPhone className="icons" /> 0739883407 </li>
        </ul>
        <p className="port-fot-inf">portfolio still in process..</p>

      </div>



    </footer>
  );
}

export default Footer;
