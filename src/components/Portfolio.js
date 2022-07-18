import React from 'react';

import '../css/Portfolio.css';




function About() {




    //some of this css is in the about.css file due to the grid stylings.
    return (
        <div className="PortFolio">

            <h4 className="portH2">PROJECTS</h4>
            <h3 className="portH">This Is My Work</h3>

            <div className="gridContainerTwo">
                <div className="grid2">
                    <div className="div12">
                        <div className="itemwrap2">
                            <h3 className="itemH2">Project 1</h3>
                            <p className="itemText2">Formed with React js and with the complexity of Node js and sql we can have a live chatt app. </p>
                            <p className="portBtn">Learn more</p >
                        </div>
                    </div>
                    <div className="div12">
                        <div className="itemwrap2">
                            <h3 className="itemH2">Project 2</h3>
                            <p className="itemText2">The front end and interactiveness of this web application was done with React js, try it out.</p>
                            <p className="portBtn">Learn more</p>
                        </div>
                    </div>
                    <div className="div12">
                        <div className="itemwrap2">
                            <h3 className="itemH2">Project 3</h3>
                            <p className="itemText2">With challenge in mind, this app was build due to interest in the stock market, this is done, with React js</p>
                            <p className="portBtn">Learn more</p>
                        </div>
                    </div>
                </div>

            </div>









        </div>
    );
}

export default About;
