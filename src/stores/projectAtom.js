import { atom } from 'recoil';

import TA from '../images/checklist.jpg';
import CA from '../images/chattapp.png';
import WE from '../images/watch-pic.png';


export const projectList = atom({
  key: 'ProjectList',
  default: [{ id: '1', nr: 'Chatt app', link: 'https://github.com/Flying0101/K3-chatt-backend/tree/main/k3-backend', name: 'LiveChatt', information: "The goal with this project was to learn the basics within Node js, Sqlit3 and Socket.io, to attain a basic understanding on how you manage to connect a front-end with a back-end and a simple sql database, along with learning how the server cooperates with the client side. A great project which increased my JS knowledge as well as getting a better understanding on what you can build with Node JS/sqlite. (desktop only)", img: CA, netapp: 'https://github.com/Flying0101/K3-chatt-backend/tree/main/k3-backend' }, { id: '2', nr: 'Task app', name: 'Check-list', information: "Goal with this project was to make an todo app as simple as possible with a clean and nice responsive design and to work more on arrays and with Recoil, i learned more about css and arrays with this project, a good project overall. dont forget to click the Github icon to see the project code and click the image to test it out! ;)", img: TA, link: 'https://github.com/Flying0101/check-todo/tree/main/src', netapp: 'https://check-list-edition.netlify.app' }, { id: '3', nr: '{ project still in development }', name: 'Watch ecom', information: "unfortunately this project is still under construction, you can checkout the source code by clicking on the github icon and see the current state of the app by clicking on the picture, more will be displayed when project is completed.", link: 'https://github.com/Flying0101/watch-ecom', netapp: 'https://watch-ecom-project.netlify.app/', img: WE }],
});



