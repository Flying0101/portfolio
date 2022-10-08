import React from 'react';

import TypeWriter from 'typewriter-effect';

import '../css/Home.css';

function Home() {









  return (
    <div >
      <div id="homeSection"></div> 
      <h1 className="startHeader">Hi, <br /> I'm a Front End </h1>

      <div className="launch">
        <TypeWriter
          options={{
            strings: ['Developer'],
            autoStart: true,
            loop: true,
            delay: 50,
            pauseFor: 15000,
            cursor: '/>', 
          }}
        /></div>



<a href="#aboutSection"><button className="viewMore">View More</button></a>




    </div>
  );
}

export default Home;
