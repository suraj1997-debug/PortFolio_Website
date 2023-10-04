import React from 'react';
import Layout from '../../components/Layout';
import './style.css';
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import MobileFooter from '../../components/MobileFooter';

const containerVariants = {
    hidden: {
        opacity: 0

    },
    visible: {
        opacity: 1,
        transition: { duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { delay: .5, ease: 'easeInOut' }
    }
}

const headerVariants = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: '0vw',
        transition: { delay: 0.5, type: "spring", stiffness: 40, duration: 3 }
    },
    exit: {
        y: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const leftVariants = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: '0vw',
        transition: { delay: 0.5, duration: 3 }
    },
    exit: {
        y: '100vw',
        transition: { delay: .1, ease: 'easeInOut' }
    }
}

const rightVariants = {
    hidden: {
        y: '100vw'
    },
    visible: {
        y: '0vw',
        transition: { duration: 3 }
    },
    exit: {
        y: '-100vw',
        transition: { delay: .1, ease: 'easeInOut' }
    }
}

const AboutContainer = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="Flex-Row">
            <Layout style={{ position: "fixed", width: "20.5rem" }}>
                <div id="about" style={{ backgroundColor: "black", width: "calc(100vw - 20.5rem)", height: "100vh", marginLeft: "19.2rem" }}>
                    <div className="container">
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="aboutHeading">
                            <div className="header">
                                <h1>About Me</h1>
                                <span><FaUser /></span>
                            </div>
                            <div className="line">
                            </div>
                        </motion.div>
                        <div className="aboutContent">
                            <motion.div
                                variants={leftVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="left">
                                <h1>Mern Stack Developer</h1>
                                <p>Dedicated MERN stack developer with 2 years experience in creating responsive web applications.Proficient in MongoDB, Express.js,
                                    React and Node.js. I am enthusiastic about contributing to projects that demand both technical excellence and creative problem-solving.
                                    My aim is to excel in a collaborative environment and help build web solutions that elevate user experiences.</p>
                            </motion.div>
                            <motion.div
                                variants={rightVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="right">
                                <h1>Personal Information</h1>
                                <p>Name: Suraj Bhangu</p>
                                <p>Age: 24</p>
                                <p>Address: A-1 ,Pramukh Sanghat Society,Samarvarni,Silvassa,Dadra and Nagar Haveli</p>
                                <p>PinCode:396230</p>
                                <p>Email:suraj18903@gmail.com</p>
                                <p>Phone:7984818881</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Layout>
            < MobileFooter />
        </motion.div>
    );
}

export default AboutContainer;