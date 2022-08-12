
import React, { useState, useEffect } from 'react';
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

import '../css/Nav.css';




function Navigation() {

    const navStyle = {
        color: 'black'
    };

    return (

        <div>
            <nav className="navBar" >

                <a href="#homeSection"> <p id="logo"><FaUserAstronaut id="logoIcon" /> S.M</p></a>

                <ul className="navBar">
                    <Link style={navStyle} to='/'>
                        <li className="linksTwo">HOME</li>
                    </Link>
                </ul>

            </nav>


        </div>
    );
}




export default Navigation;
