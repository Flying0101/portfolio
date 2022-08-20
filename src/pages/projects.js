

import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { projectList } from '../stores/projectAtom';




import NavTwo from '../components/NavTwo';
import '../css/Project.css';



import TP from '../images/pct.jpg';




function Projects() {


    const params = useParams();
    const data = useRecoilValue(projectList);

    const dataValue = data.find(project => project.id === params.id);

    console.log(`its works, you clicked project nr ${dataValue.name}`);






    return (


        <div className="Project">
            <NavTwo />
            <div className="space"><p className="project-end">console.log( 'this is the end of this page' )...</p></div>
            <div className="projectContainer">
                <div className="projectGrid">
                    <div className="part">
                        <h3 className="projectH">{dataValue.nr}</h3>
                        <img src={TP} className="projectPic" />
                    </div>

                    <div className="partTwo">
                        <h4 className="project-name">{dataValue.name}</h4>
                        <p className="project-info">{dataValue.information}</p>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default Projects;
