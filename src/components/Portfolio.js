import React, { useState } from 'react';
import '../css/Portfolio.css';
import Lottie from "lottie-react";
import webbapp from '../lotties/webb-builder.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRecoilState, useRecoilValue, useRef } from 'recoil';
import { projectList } from '../stores/projectAtom';

import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function Portfolio() {

    const projects = useRecoilValue(projectList);

    console.log(projects)
    const navStyle = {
        color: 'white',
        textDecoration: 'none'

    };
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
                                    <h2>{project.name}</h2>
                                    <p>{project.information}</p>
                                </SwiperSlide>

                            )
                        })}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
