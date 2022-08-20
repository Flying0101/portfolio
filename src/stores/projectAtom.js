import React from 'react';
import { atom } from 'recoil';


export const projectList = atom({
  key: 'ProjectList',
  default: [{ id: '1', nr: 'Project 1', name: 'LiveChatt', information: "The goal with this project was to learn the basics within Node js, Sqlit3 and Socket.io, to attain a basic understanding on how you manage to connect a front-end with a back-end and a simple sql database, along with learning how the server cooperates with the client side. A great project which increased my JS knowledge as well as getting a better understanding on what you can build with Node JS/sqlite. " }, { id: '2', nr: 'error 101', name: 'ERROR 101', information: "unfortunately this project is still under construction, it will get uploaded as soon as its done, may i suggest to check out my other projects! if you have any questions feel free to contact me, you will get an answer within 24hr." }, { id: '3', nr: 'error 101', name: 'ERROR 101', information: "unfortunately this project is still under construction, it will get uploaded as soon as its done, may i suggest to check out my other projects! if you have any questions feel free to contact me, you will get an answer within 24hr." }],
});



