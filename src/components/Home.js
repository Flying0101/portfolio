import React from 'react';

import TypeWriter from 'typewriter-effect';

import '../css/Home.css';

function Home() {









  return (
    <div >
      <h1 className="startHeader">Hi, <br /> I'm a Front End </h1>

      <div className="launch">
        <TypeWriter
          options={{
            strings: ['Developer', 'App Developer'],
            autoStart: true,
            loop: true,
          }}
        /></div>



      <button className="viewMore">View More</button>




    </div>
  );
}

export default Home;
