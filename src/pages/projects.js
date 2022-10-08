

import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { projectList } from '../stores/projectAtom';


import { FaGithub } from "react-icons/fa";


import NavTwo from '../components/NavTwo';
import '../css/Project.css';


 
import TP from '../images/pct.jpg';

import TA from '../images/checklist.jpg'; 



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
                        <a  id="over" target="_blank" href={dataValue.netapp}><img src={dataValue.img} className="projectPic" /></a>
                    </div>

                    <div className="partTwo">
                        <h4 className="project-name">{dataValue.name}</h4>
                        <a id="over" href={dataValue.link} target="_blank"><FaGithub className="gIcon" /></a>
                        <p className="project-info">{dataValue.information}</p>
                        <br/>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default Projects;
