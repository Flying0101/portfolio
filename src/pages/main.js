import React from 'react';

import Navigation from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

function Main() {


    return (

        <div className="Main">
            <Navigation />
            <Home />
            <About />
            <Portfolio />
            <Footer />


        </div>

    );
}

export default Main;
