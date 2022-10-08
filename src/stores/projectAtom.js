import React from 'react';
import { atom } from 'recoil';

import TA from '../images/checklist.jpg';
import CA from '../images/chattapp.png';
 

export const projectList = atom({
  key: 'ProjectList',
  default: [{ id: '1', nr: 'Project 1', link: 'https://github.com/Flying0101/K3-chatt-backend/tree/main/k3-backend', name: 'LiveChatt', information: "The goal with this project was to learn the basics within Node js, Sqlit3 and Socket.io, to attain a basic understanding on how you manage to connect a front-end with a back-end and a simple sql database, along with learning how the server cooperates with the client side. A great project which increased my JS knowledge as well as getting a better understanding on what you can build with Node JS/sqlite. ", img: CA }, { id: '2', nr: 'project 2', name: 'Check-list', information: "Goal with this project was to make an todo app as simple as possible with a clean and nice responsive design and to work more on arrays and with Recoil, i learned more about css and arrays with this project, a good project overall. dont forget to click the Github icon to see the project code and click the image to test it out! ;)", img: TA, link: 'https://github.com/Flying0101/check-todo/tree/main/src', netapp: 'https://check-list-edition.netlify.app' }, { id: '3', nr: 'error 101', name: 'ERROR 101', information: "unfortunately this project is still under construction, it will get uploaded as soon as its done, may i suggest to check out my other projects! if you have any questions feel free to contact me, you will get an answer within 24hr." }],
});



