import React from 'react';
import '../css/Portfolio.css';
import webbapp from '../lotties/webb-builder.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';
import { projectList } from '../stores/projectAtom';
import Lottie from "lottie-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FaGithub, FaLaptopCode } from 'react-icons/fa';


function Portfolio() {
    const projects = useRecoilValue(projectList);
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    //some of this css is in the about.css file due to the grid stylings.
    return (
        <section className="portfolio-section" >
            <div className="PortFolio" >
                <div id="portfolioSection"></div>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h4 className="portH2" >PROJECTS</h4>
                </motion.p>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1.3 }}
                >
                    <Lottie animationData={webbapp} id="port-animation" />
                    <div className="swiper-carousel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {projects.map((project) => {
                                return (
                                    <SwiperSlide>
                                        <img src={project.img} className="sw-img" alt="application display" />
                                        <div className="sw-content">
                                            <h2 className="sw-h2">{project.name}</h2>
                                            <p className="sw-p">{project.information}</p>
                                            <div className="sw-div">
                                                <button id="sw-btns" className="sw-test" onClick={() => window.open(project.netapp)}><FaLaptopCode className="sw-icon" />Test</button>
                                                {project.link ? (<button id="sw-btns" className="sw-github" onClick={() => window.open(project.link)}><FaGithub className="sw-icon" /> Source</button>) : ('')}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </motion.p>
            </div>
        </section>
    );
}
export default Portfolio;
