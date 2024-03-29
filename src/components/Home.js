import React from 'react';

import TypeWriter from 'typewriter-effect';
import Lottie from "lottie-react";

import space from '../lotties/space-sensei.json';
import '../css/Home.css';

function Home() {









  return (
    <section className="home-section">
      <div id="homeSection"></div>
      <div className="home-wrap">
        <Lottie animationData={space} id="home-animation" />
        <h1 className="startHeader">Hello, <br /> <span className="grey-text">Welcome to my</span> </h1>

        <div className="launch">
          <TypeWriter
            options={{
              strings: ['Projects..'],
              autoStart: true,
              loop: true,
              delay: 50,
              pauseFor: 15000,
              cursor: '/>',
            }}
          />
        </div>
        <a href="#aboutSection" id="h-btn"><button className="viewMore">View More</button></a>


      </div>

    </section>
  );
}

export default Home;
