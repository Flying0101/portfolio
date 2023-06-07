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

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function About() {

    const [show, setShow] = useState(false);


    function activate() {
        setShow(!show);
    }

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <section className="about-section" >
            <div id="aboutSection"></div>
            <motion.p
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.7 }}
            >
                <h4 className="infH">SOFTWARE</h4>
                <h3 className={(!show ? 'gridHeader' : 'hidden')}>Tech Stack</h3>
            </motion.p>
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




            {!show ? (<motion.p
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.9 }}
            ><div className="gridContainer">


                    <div className="picSE ">
                        <img alt="javascript logo" src={AP} className="picST" />
                    </div>

                    <button onClick={(activate)} className="expBtn">EXPLORE MORE</button>


                </div></motion.p>) : (<section className="tech-stack-container">
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="g-c-divs">
                            <h1 className="g-c-h">Specialized in</h1>
                            <div className="g-c-flex">

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="react icon" src={REACT} />
                                        <p className="g-c-p">React</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="javascript icon" src={JAVASCRIPT} />
                                        <p className="g-c-p">JavaScript</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="html icon" src={HTML} />
                                        <p className="g-c-p">HTML</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="css icon" src={CSS} />
                                        <p className="g-c-p">CSS</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="git icon" src={GIT} />
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
                                        <img className="g-c-img" alt="typescript icon" src={TS} />
                                        <p className="g-c-p">TypeScript</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="nextjs icon" src={NEXT} />
                                        <p className="g-c-p">NextJS</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="nodejs icon" src={NODEJS} />
                                        <p className="g-c-p">NodeJS</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="jest icon" src={JEST} />
                                        <p className="g-c-p">Jest </p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="jira icon" src={JIRA} />
                                        <p className="g-c-p">JIRA</p>
                                    </div>
                                </div>

                                <div className="g-c-content">
                                    <div>
                                        <img className="g-c-img" alt="github icon" src={GITHUB} id="g-w"/>
                                        <p className="g-c-p">Github</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </motion.p>
                </section>)}












        </section >
    );
}

export default About;
