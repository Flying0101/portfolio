import React from 'react';

import '../css/Portfolio.css';

import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import webbapp from '../lotties/webb-builder.json';


import taskpic from '../images/todo.png';
import chattpic from '../images/chattapp.png';


import T3video from '../videos/watch-intro.mp4'

function Portfolio() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'

    };


    //some of this css is in the about.css file due to the grid stylings.
    return (

        <section className="portfolio-section" >

            <div className="PortFolio" >
                <div id="portfolioSection"></div>

                <h4 className="portH2" >PROJECTS</h4>
                <Lottie animationData={webbapp} id="port-animation" />

                <div className="gridContainerTwo">




                    <div className="grid2">
                        <div className="div1">
                            <img alt="watch" className="project-pic" src={taskpic} />
                            <Link style={navStyle} to='/projects/2'>
                                <p className="p-pic-inf"> - Task app</p>

                            </Link>


                        </div>
                        <div className="div2">
                            <img alt="watch" className="project-pic" src={chattpic} />
                            <Link style={navStyle} to='/projects/1'>
                                <p className="p-pic-inf">- Chatt app</p>

                            </Link>

                        </div>
                        <div className="div3">
                            <video autoPlay playsInline loop muted id="home-video" >
                                <source src={T3video} type='video/mp4' />
                            </video>
                            <Link style={navStyle} to='/projects/3'>
                                <p className="p-pic-inf"> - Watch store, T3</p>

                            </Link>
                        </div>

                    </div>

                </div>






            </div>
        </section>
    );
}

export default Portfolio;
