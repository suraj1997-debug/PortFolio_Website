import React from 'react';
import Layout from '../../components/Layout';
import './style.css'
import { motion } from 'framer-motion';
import { FaChartBar } from 'react-icons/fa';
import MobileFooter from '../../components/MobileFooter';
import 'react-circular-progressbar/dist/styles.css';
import Skill from '../../components/Skill';



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

const skillVariants ={
    hidden: {
        y: '100vw'
    },
    visible: {
        y: '0vw',
        transition: { delay: 1.7, type: "spring", stiffness: 35, duration: 3 }
    },
    exit: {
        y: '100vw',
        transition: { ease: 'easeInOut' }
    }
}

const skillheadingVariants ={
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: '0vw',
        transition: { delay: 1.9, type: "spring", stiffness: 35, duration: 3 }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }
    }
}

const PortFolioContainer = (props) => {


    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="Flex-Row">
                <Layout style={{ position: "fixed", width: "20.5rem" }}>
                    <div id="portfolio" style={{ backgroundColor: "black", width: "calc(100vw - 20.5rem)", height: "100vh", marginLeft: "19.2rem" }}>
                        <div className="container">
                            <motion.div
                                variants={headerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="portfolioHeading">
                                <div className="header">
                                    <h1>SkillSets</h1>
                                    <span><FaChartBar /></span>
                                </div>
                                <div className="line">
                                </div>
                            </motion.div>
                            <div className="portfolioContent">
                                <div className="skillContainer">
                                    <motion.div 
                                     variants={skillheadingVariants}
                                     initial="hidden"
                                     animate="visible"
                                     exit="exit"
                                    className="skillsetHeading">
                                    <h3>What I Do</h3>
                                    <h2>Specializing In</h2>
                                    </motion.div>
                                    <motion.div
                                      variants={skillVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                     className="skillContentContainer">
                                    <Skill 
                                    skillpercent={90}
                                    textColor="white"
                                    pathColor="#ffe227"
                                    Skillname="HTML/CSS"
                                    Skilldesc="hands on experience on html/css"
                                    />
                                     <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#314e52"
                                    Skillname="Reactjs/Redux"
                                    Skilldesc="hands on experience on Reactjs/Redux"
                                    />
                                    <Skill 
                                    skillpercent={90}
                                    textColor="white"
                                    pathColor="#00af91"
                                    Skillname="Bootstrap"
                                    Skilldesc="hands on experience on Bootstrap"
                                    />
                                      <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#a20a0a"
                                    Skillname="Nodejs"
                                    Skilldesc="hands on experience on Nodejs"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#350b40"
                                    Skillname="JavaScript"
                                    Skilldesc="hands on experience on javascript"
                                    />
                                    <Skill 
                                    skillpercent={80}
                                    textColor="white"
                                    pathColor="#ff5200"
                                    Skillname="RestAPIs"
                                    Skilldesc="hands on experience on RestAPIs"
                                    />
                                     <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#58391c"
                                    Skillname="MongoDB"
                                    Skilldesc="hands on experience on MongoDB"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#295939"
                                    Skillname="Git & GitHub"
                                    Skilldesc="hands on experience on Git & GitHub"
                                    />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <MobileFooter />
            </motion.div>
        </>
    )
}

export default PortFolioContainer;