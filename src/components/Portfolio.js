import React from 'react';

import '../css/Portfolio.css';

import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import webbapp from '../lotties/webb-builder.json';

function Portfolio() {

    const navStyle = {
        color: 'white'
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




                        <div className="div12">
                            <div className="itemwrap2">
                                <h3 className="itemH2">Project 1</h3>
                                <p className="itemText2">Formed with React js and with the complexity of Node js and sql we can have a live chatt app. </p>

                            </div>
                            <Link style={navStyle} to='/projects/1'>

                                <p className="portBtn">Learn more</p>
                            </Link>
                        </div>
                        <div className="div12">
                            <div className="itemwrap2">
                                <h3 className="itemH2">Task List</h3>
                                <p className="itemText2">The front end and interactiveness of this simple application was done with React js, try it out.</p>

                            </div>
                            <Link style={navStyle} to='/projects/2'>

                                <p className="portBtn">Learn more</p>
                            </Link>
                        </div>
                        <div className="div12">
                            <div className="itemwrap2">
                                <h3 className="itemH2">Watch store</h3>
                                <p className="itemText2">
                                    Build with React Js / Recoil, goal is to build a fully functioning ecom site with plenty of functions, PROJECT IS STILL IN PROCESS.</p>
                            </div>
                            <Link style={navStyle} to='/projects/3'>

                                <p className="portBtn">Learn more</p>
                            </Link>
                        </div>

                    </div>

                </div>






            </div>
        </section>
    );
}

export default Portfolio;
