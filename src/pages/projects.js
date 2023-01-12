

import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { projectList } from '../stores/projectAtom';


import { FaGithub } from "react-icons/fa";


import NavTwo from '../components/NavTwo';
import '../css/Project.css';

import Footer from '../components/Footer';


function Projects() {


    const params = useParams();
    const data = useRecoilValue(projectList);

    const dataValue = data.find(project => project.id === params.id);

    console.log(`its works, you clicked project nr ${dataValue.name}`);




    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])




    return (


        <section className="Project">
            <NavTwo />
            <div className="projectContainer">

                <div className="projectGrid">
                    <div className="part">

                        <h3 className="projectH">{dataValue.nr}</h3>
                        <div className="pro-img-con">
                            <a id="over" target="_blank" rel="noreferrer" href={dataValue.netapp}>
                                <img alt="showing project" src={dataValue.img} className="projectPic" />
                            </a>
                        </div>

                    </div>


                    <div className="partTwo">
                        <h4 className="project-name">{dataValue.name}</h4>
                        <a id="over" href={dataValue.link} target="_blank" rel="noreferrer"><FaGithub className="gIcon" /> </a>
                        <p className="project-info">{dataValue.information}</p>
                        <br />

                    </div>

                </div>

            </div>

            <Footer />
        </section>

    );
}

export default Projects;
