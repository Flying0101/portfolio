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
            <h3 className={(!show ? 'gridHeader' : 'hidden')}>These Are My Tools</h3>
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
                                <p>- Frontend development</p>
                            </div>

                            <div className="content">
                                <p>- JavaScript, ReactJs, <br /> NodeJs.</p>
                            </div>

                            <div className="content">
                                <p>- Git, Copywriting<br /> Google analytics.</p>
                            </div>

                            <div className="content">
                                <p>- HTML, CSS <br /> </p>
                            </div>

                        </div>



                    </div>

                    <div className="grid-div">

                        <p className="about-content-header">Tools / years</p>



                        <div className="content-grid">

                            <div className="content">
                                <p>- JavaScript/+1 <br /> - React/+1</p>
                            </div>

                            <div className="content">
                                <p>- HTML/+1 <br /> - CSS/+1</p>
                            </div>

                            <div className="content">
                                <p>- Vue/~1 <br /> - TypeScript/~1</p>
                            </div>

                            <div className="content">
                                <p>- Node.js/~1 <br /> - Google Analytics/~1</p>
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
