import React, { useState, useEffect } from 'react';

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


                    <a href="#homeSection"><li className="links">HOME</li></a>
                    <a href="#aboutSection"><li className="links">ABOUT</li></a>
                    <a href="#portfolioSection"><li className="links">PORTFOLIO</li></a>
                    <a href="#contactSection"><li className="links">CONTACT</li></a>
                </ul>

            </nav>


            <nav className={navOpen ? "slide-in" : "slide-out"}>
                <ul>
                    <a href="#homeSection"> <li onClick={() => closeMenu()} className="bLink">HOME</li></a>
                    <a href="#aboutSection">  <li onClick={() => closeMenu()} className="bLink">ABOUT</li></a>
                    <a href="#portfolioSection"> <li onClick={() => closeMenu()} className="bLink">PORTFOLIO</li></a>
                    <a href="#contactSection">     <li onClick={() => closeMenu()} className="bLink">CONTACT</li></a>
                </ul>
            </nav>




        </div>
    );
}



// {navOpen ? (

// ) : (
//     <div></div>
// )}

export default Navigation;
