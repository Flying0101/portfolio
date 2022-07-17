import React from 'react';

import '../css/About.css';


import JS from '../images/js.png';
import RT from '../images/react.png';


function About() {




    // Make grid about tools you use to build stuff with

    return (
        <div className="About">
            <h4 className="infH">SOFTWARE</h4>
            <h3 className="gridHeader">This Are My Tools</h3>



            <div className="gridContainer">
                <div className="grid">
                    <div className="div1">
                        <div className="itemwrap">
                            <img src={JS} className="imgs" />
                            <h3 className="itemH">JavaScript</h3>
                            <p className="itemText">The golden sword to build complex interactive websites and to connect servers to website and web applications</p>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="itemwrap">
                            <img src={RT} className="imgs" />
                            <h3 className="itemH">React</h3>
                            <p className="itemText">Creating the front end of web applications, and building them to be responsive, fast, and reliable</p>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="itemwrap">
                            <img src={JS} className="imgs" />
                            <h3 className="itemH">Node | Sql</h3>
                            <p className="itemText">Building the back end of web applications, and creating gateways to call api's and have databases</p>
                        </div>
                    </div>
                </div>


            </div>









        </div>
    );
}

export default About;
