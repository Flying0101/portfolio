import React from 'react';
import '../css/Portfolio.css';
import Lottie from "lottie-react";
import webbapp from '../lotties/webb-builder.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Portfolio() {

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






            </div>
        </section>
    );
}

export default Portfolio;
