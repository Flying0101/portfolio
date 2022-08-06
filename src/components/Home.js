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
            strings: ['Developer', 'App Developer'],
            autoStart: true,
            loop: true,
          }}
        /></div>



<a href="#aboutSection"><button className="viewMore">View More</button></a>




    </div>
  );
}

export default Home;
