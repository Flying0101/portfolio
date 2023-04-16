import React from 'react';
import { useState } from 'react';
import TypeWriter from 'typewriter-effect';
import '../css/About.css';

import AP from '../images/js-react.png';

import REACT from '../images/React-icon.svg.png';
import JAVASCRIPT from '../images/JS-icon.png';
import HTML from '../images/html-icon.png'; 
import CSS from '../images/css-icon.png'; 
import GIT from '../images/git-icon.png'; 
import TS from '../images/ts-icon.png'; 
import NEXT from '../images/nextjs.png'; 
import NODEJS from '../images/nodejs-icon.png'; 
import JEST from '../images/jest-icon.png'; 
import JIRA from '../images/jira-icon.png'; 
import GITHUB from '../images/github-icon.png'; 

function About() {

    const [show, setShow] = useState(false);


    function activate() {
        setShow(!show);
    }



    return (
        <section className="about-section" >
            <div id="aboutSection"></div>

            <h4 className="infH">SOFTWARE</h4>
            <h3 className={(!show ? 'gridHeader' : 'hidden')}>Tech Stack</h3>
            <h3 className={(!show ? 'hidden' : 'gridHeader')}>
                <TypeWriter
                    options={{
                        strings: ['Skills / Worked with..'],
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


            </div>) : (<section className="tech-stack-container">

                <div className="g-c-divs">
                    <h1 className="g-c-h">Specialized in</h1>
                    <div className="g-c-flex">

                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={REACT} />
                                <p className="g-c-p">React</p>
                            </div>
                        </div>

                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={JAVASCRIPT}/>
                                <p className="g-c-p">JavaScript</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={HTML} />
                                <p className="g-c-p">HTML</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={CSS}/>
                                <p className="g-c-p">CSS</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={GIT} />
                                <p className="g-c-p">GIT</p>
                            </div>
                        </div>
       
       

                    </div>
                </div>
                <div className="g-c-divs">
                    <h1 className="g-c-h">Experienced in</h1>
                    <div className="g-c-flex">

                    <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={TS}/>
                                <p className="g-c-p">TypeScript</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={NEXT} />
                                <p className="g-c-p">NextJS</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={NODEJS} />
                                <p className="g-c-p">NodeJS</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={JEST} />
                                <p className="g-c-p">Jest </p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={JIRA} />
                                <p className="g-c-p">JIRA</p>
                            </div>
                        </div>
       
                        <div className="g-c-content">
                            <div>
                                <img className="g-c-img" src={GITHUB}/>
                                <p className="g-c-p">Github</p>
                            </div>
                        </div>
       
                    </div>
                </div>


            </section>)}












        </section >
    );
}

export default About;
