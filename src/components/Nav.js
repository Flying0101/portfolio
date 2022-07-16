import React, { useState } from 'react';

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

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
            <nav className="navBar">

                <button className="menyBtn" onClick={handleToggle}>{navOpen ? "X" : "MENU"}</button>

                <ul className="navBar">
                    <li className="links">HOME</li>
                    <li className="links">ABOUT</li>
                    <li className="links">PORTFOLIO</li>
                    <a href="https://google.se"><li className="links">CONTACT</li></a>
                </ul>

            </nav>


            {navOpen ? (
                <nav className="navBurger">
                    <ul>
                        <li onClick={() => closeMenu()} className="bLink">HOME</li>
                        <li onClick={() => closeMenu()} className="bLink">ABOUT</li>
                        <li onClick={() => closeMenu()} className="bLink">PORTFOLIO</li>
                        <li onClick={() => closeMenu()} className="bLink">CONTACT</li>
                    </ul>
                </nav>
            ):(
                <div></div>
            )}



        </div>
    );
}

export default Navigation;
