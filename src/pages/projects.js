

import React from 'react';
import NavTwo from '../components/NavTwo';
import '../css/Project.css';



import TP from '../images/pct.jpg';




function Projects() {


    return (

        <div className="Project">
            <NavTwo />
            <div className="projectContainer">
                <div className="projectGrid">
                    <div className="part">
                        <h3 className="projectH">project</h3>
                        <img src={TP} className="projectPic" />
                    </div>

                    <div className="partTwo">
                        <h4 className="project-name">namn/syfte</h4>
                        <p className="project-info">Med en komplett webbplats kan du komma igång snabbt och fokusera på din verksamhet och du får en webbplats du kan växa i. Vi hjälper dig genom hela produktionen. För ni ska kunna fokusera på er verksamhet och kärnverksamhet, bistår vi med att hitta bilder och skriva texter. Ni kan luta er tillbaka och låta oss ta hand om ert företags webbplats.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;
