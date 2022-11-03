import React from 'react';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import TypeWriter from 'typewriter-effect';

import '../css/About.css';

import AP from '../images/js-react.png';

function About() {

    const [show, setShow] = useState(false);


    function activate() {
        setShow(!show);
    }



    return (
        <div className="About" >
            <div id="aboutSection"></div>

            <h4 className="infH">SOFTWARE</h4>
            <h3 className={(!show ? 'gridHeader' : 'hidden')}>Tech Stack / Interests</h3>
            <h3 className={(!show ? 'hidden' : 'gridHeader')}>
                <TypeWriter
                    options={{
                        strings: ['About me..'],
                        autoStart: show,
                        loop: true,
                        delay: 50,
                        pauseFor: 15000,
                        cursor: '/>',
                    }}
                />
            </h3>




            {!show ? (<div className="gridContainer">


                <div className="picSE ">
                    <img src={AP} className="picST" />
                </div>

                <button onClick={(activate)} className="expBtn">EXPLORE MORE</button>


            </div>) : (<div className="gridContainer">
                <div className="about-Grid">
                    <div className="grid-div">

                        <a id="over" href="https://www.linkedin.com/in/stephano-melo-333316177" target="_blank"><FaLinkedin className="linkd-icon" /></a>

                        <a id="over" href="https://github.com/Flying0101" target="_blank"><FaGithub className="git-icon" /></a>

                        <p className="about-text">I am a creative frontend developer,  always up for new challenges, from Sweden,<br /> based in Stockholm</p>
                    </div>

                    <div className="grid-div">
                        <p className="about-content-header">Main Skills</p>


                        <div className="content-grid">

                            <div className="content">
                                <div>
                                    <p>- JavaScript </p>
                                    <p>- HTML/CSS </p>

                                </div>
                            </div>

                            <div className="content">
                                <div>
                                    <p>- ReactJs</p>
                                    <p>- NextJs</p>
                                    <p>- NodeJs</p>
                                </div>
                            </div>

                            <div className="content">
                                <div>
                                    <p>- Git </p>
                                    <p>- MongoDB</p>
                                </div>
                            </div>

                            <div className="content">
                                <div>
                                    <p>- Socket.io</p>
                                    <p>- Express</p>
                                    <p>- SQLite</p>

                                </div>
                            </div>

                        </div>



                    </div>

                    <div className="grid-div">

                        <p className="about-content-header">Interests</p>



                        <div className="content-grid">

                            <div className="content">
                                <div>
                                    <p>- Copywriting</p>
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <p>- Ecommerce</p>
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <p>- Marketing</p>
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <p>- Fullstack tech</p>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="grid-div">

                    </div>


                </div>


            </div>)}












        </div >
    );
}

export default About;
