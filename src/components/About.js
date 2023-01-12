import React from 'react';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import TypeWriter from 'typewriter-effect';

import '../css/About.css';

import AP from '../images/js-react.png';

import MTB2 from '../images/mtb2.jpg';


function About() {

    const [show, setShow] = useState(false);


    function activate() {
        setShow(!show);
    }



    return (
        <section className="about-section" >
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
                    <img alt="javascript logo" src={AP} className="picST" />
                </div>

                <button onClick={(activate)} className="expBtn">EXPLORE MORE</button>


            </div>) : (<div className="gridContainer">
                <div className="about-Grid">
                    <div className="grid-div">

                        <a id="over" href="https://www.linkedin.com/in/stephano-melo-333316177" target="_blank" rel="noreferrer"><FaLinkedin className="linkd-icon" /></a>

                        <a id="over" href="https://github.com/Flying0101" target="_blank" rel="noreferrer"><FaGithub className="git-icon" /></a>

                        <p className="about-text">I am a creative frontend developer,  always up for new challenges, from Sweden,<br /> based in Stockholm.</p> <p className="about-text2">Before my coding journey i was into downhill racing and building tracks but after breaking bones and having too many injuries i decided to hang my bike up and give coding a change while i worked in sales, and now im here!</p>
                    </div>

                    <div className="grid-div">


                        <img alt="downhill bike" src={MTB2} className="about-pic" />


                    </div>

                    <div className="grid-div">
                        <p className="about-content-header">Main Skills / worked with</p>


                        <div className="content-grid">

                            <div className="content">
                                <div>
                                    <p>- JavaScript </p>
                                    <p>- HTML/CSS </p>

                                </div>
                            </div>

                            <div className="content">

                                <div>
                                    <p>- Typescript</p>
                                    <p>- NodeJs</p>
                                    <p>- Jest Testing</p>
                                </div>
                            </div>

                            <div className="content">
                                <div>
                                    <p>- Git </p>
                                    <p>- ReactJs</p>
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
                                    <p>- Powerlifting</p>
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <p>- React Js</p>
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <p>- Fullstack tech</p>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>


            </div>)}












        </section >
    );
}

export default About;
