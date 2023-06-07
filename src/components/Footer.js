import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import '../css/Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {


    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }



    return (
        <footer className="footer-section">
            <div className="f-contact-container">
                <div className="f-c-div">
                    <a id="over" href="https://www.linkedin.com/in/stephano-melo-333316177" target="_blank" rel="noreferrer"><FaLinkedin className="linkd-icon" /></a>
                    <a id="over" href="https://github.com/Flying0101" target="_blank" rel="noreferrer"><FaGithub className="git-icon" /></a>

                </div>

            </div>

            <div className="f-links-container">
                <div className="f-l-div">
                    <h3 className="f-l-header">Based in</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis"><FaMapMarkerAlt className="icons" />  Stockholm, Sweden</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Email</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis"><FaEnvelope className="icons" /> Stephano@live.se</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Tel-nr</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis"><FaPhone className="icons" /> +46(0) 739883407</li>
                    </ul>
                </div>
            </div>

            <div className="f-bottom-container">
                <div className="f-b-wraper">
                    <p className="f-b-text">2023 Terms privacy</p>
                    <button className="f-b-btn" onClick={() => scrollToTop()}>BACK TO TOP</button>
                </div>
            </div>
        </footer>
    )

}

export default Footer