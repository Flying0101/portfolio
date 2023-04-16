import React, { useState } from 'react';

import { FaUserAstronaut } from "react-icons/fa";

import '../css/Nav.css';




function Navigation() {

    const [navOpen, setNavOpen] = useState(false);


    const handleToggle = () => {
        setNavOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavOpen(false)
    }



    return (

        <div>
            <nav className="navBar" >

                <a href="#homeSection"> <p id="logo"><FaUserAstronaut id="logoIcon" /> S.M</p></a>

                <button className="menyBtn" id="toggle" onClick={handleToggle}>{navOpen ? "X" : "MENU"}</button>

                <ul className="navBar">

                    <a href="#homeSection" id="n-l"><li className="links">HOME</li></a>
                    <a href="#aboutSection" id="n-l"><li className="links">PROJECTS</li></a>
                    <a href="#portfolioSection" id="n-l"><li className="links">TECHSTACK</li></a>
                </ul>

            </nav>


            <nav className={navOpen ? "slide-in" : "slide-out"}>
                <ul>
                    <a href="#homeSection" id="n-l"> <li onClick={() => closeMenu()} className="bLink">HOME</li></a>
                    <a href="#aboutSection" id="n-l">  <li onClick={() => closeMenu()} className="bLink">PROJECTS</li></a>
                    <a href="#portfolioSection" id="n-l"> <li onClick={() => closeMenu()} className="bLink">TECHSTACK</li></a>
                </ul>
            </nav>




        </div>
    );
}




export default Navigation;
