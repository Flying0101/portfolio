import { atom } from 'recoil';

import TA from '../images/todoapp.png';
import WE from '../images/tt.png';
import MD from '../images/md.png';
import MDMAIN from '../images/mdm.png';
import WEB from '../images/web.png';


export const projectList = atom({
  key: 'ProjectList',
  default: [ { id: '1', name: 'Watch Ecom', information: "This was my final school project, developed in ReactJs and vanilla CSS, this project still gets updated whenever i have some time over. The reason for this project was to become more proficient with css and share my knowledge about watches. Try it out! (in progress)", link: 'https://github.com/Flying0101/watch-ecom', netapp: 'https://watch-ecom-project.netlify.app/', img: WE },
  
  { id: '2', name: 'BoT site', information: "Using NextJs/Typescript with DatoCMS we developed this website, Our goal was to make them a new site for the BoT game. We build components and auto generate their types with codegen and GraphQL, we can later let the user choose the data with help of blocks and models in datoCMS ", netapp: 'https://www.mightanddelight.com/book-of-travels', img: MD },
  
  { id: '3', name: 'Might & Delight', information: "Developed using NextJs/Typescript with DatoCMS, Our goal was to make them a new and faster main site. We build components and auto generate their types with codegen and GraphQL, we can later let the user choose the data with help of blocks and models in datoCMS", netapp: 'https://www.mightanddelight.com/', img: MDMAIN },
  
  { id: '4', name: 'Agency Site', information: "I have always been driven to try more, since i started my frontend journey i started helping companies with web solutions, everything from reconstructing projects to seeing over their software architecture and with that in mind i created my own consultant website (in progress)", link: 'https://github.com/Flying0101/seo-website', netapp: 'https://starlit-churros-2ad67c.netlify.app/', img: WEB },
  
  { id: '5',name: 'Check-list', information: "Goal with this project was to make an todo app as simple as possible with a clean and nice responsive design and handle the data with Recoil. I learned more about css and arrays with this project, a good interesting project overall. (One of my first school projects)", img: TA, link: 'https://github.com/Flying0101/check-todo/tree/main/src', netapp: 'https://check-list-edition.netlify.app' }],
});



// ,{ id: '5', nr: 'Chatt app', link: 'https://github.com/Flying0101/K3-chatt-backend/tree/main/k3-backend', name: 'LiveChatt', information: "The goal with this project was to learn the basics within Node js, Sqlit3 and Socket.io, to attain a basic understanding on how you manage to connect a front-end with a back-end and a simple sql database, along with learning how the server cooperates with the client side. A great project which increased my JS knowledge as well as getting a better understanding on what you can build with Node JS/sqlite. (desktop only)", img: CA, netapp: 'https://github.com/Flying0101/K3-chatt-backend/tree/main/k3-backend' },