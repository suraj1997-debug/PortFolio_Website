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
        <React.Fragment>
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
                                    Skilldesc="2.5+ years work experience"
                                    />
                                     <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#28CE26"
                                    Skillname="React.js/Redux"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                      <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#a20a0a"
                                    Skillname="Nodejs"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#09FFF4"
                                    Skillname="JavaScript"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                    <Skill 
                                    skillpercent={80}
                                    textColor="white"
                                    pathColor="#ff5200"
                                    Skillname="RestAPIs"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                     <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#58391c"
                                    Skillname="MongoDB"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                     <Skill 
                                    skillpercent={90}
                                    textColor="white"
                                    pathColor="#00af91"
                                    Skillname="Bootstrap"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                    <Skill 
                                    skillpercent={90}
                                    textColor="white"
                                    pathColor="#FF09E1"
                                    Skillname="Tailwind CSS"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#295939"
                                    Skillname="Git & GitHub"
                                    Skilldesc="2.5+ years work experience"
                                    />
                                     <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#A9A51E"
                                    Skillname="TypeScript"
                                    Skilldesc="1 year work experience"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#B05C5C"
                                    Skillname="Firebase"
                                    Skilldesc="1 year work experience"
                                    />
                                    <Skill 
                                    skillpercent={60}
                                    textColor="white"
                                    pathColor="#207280"
                                    Skillname="Socket.io"
                                    Skilldesc="1 year work experience"
                                    />
                                     <Skill 
                                    skillpercent={60}
                                    textColor="white"
                                    pathColor="#8CCD8B"
                                    Skillname="Couchbase"
                                    Skilldesc="1 year work experience"
                                    />
                                     <Skill 
                                    skillpercent={60}
                                    textColor="white"
                                    pathColor="#D3C381"
                                    Skillname="Jira"
                                    Skilldesc="1 year work experience"
                                    />
                                     <Skill 
                                    skillpercent={60}
                                    textColor="white"
                                    pathColor="#D38195"
                                    Skillname="Jenkins"
                                    Skilldesc="1 year work experience"
                                    />
                                    <Skill 
                                    skillpercent={60}
                                    textColor="white"
                                    pathColor="#8C286E"
                                    Skillname="AWS S3"
                                    Skilldesc="1 year hands on experience"
                                    />
                                    <Skill 
                                    skillpercent={50}
                                    textColor="white"
                                    pathColor="#767271"
                                    Skillname="Next.js"
                                    Skilldesc="6 months hands on experience"
                                    />
                                    <Skill 
                                    skillpercent={50}
                                    textColor="white"
                                    pathColor="#522F28"
                                    Skillname="React Native"
                                    Skilldesc="6 months hands on experience"
                                    />
                                     <Skill 
                                    skillpercent={50}
                                    textColor="white"
                                    pathColor="#8F03FC"
                                    Skillname="PHP"
                                    Skilldesc="6 months hands on experience"
                                    />
                                     <Skill 
                                    skillpercent={50}
                                    textColor="white"
                                    pathColor="#4CFA00"
                                    Skillname="MySQL"
                                    Skilldesc="6 months hands on experience"
                                    />
                                    <Skill 
                                    skillpercent={70}
                                    textColor="white"
                                    pathColor="#FF5733"
                                    Skillname="C++"
                                    Skilldesc="1+ years hands on experience"
                                    />
                                    <Skill 
                                    skillpercent={50}
                                    textColor="white"
                                    pathColor="#B5B8B3"
                                    Skillname="Java"
                                    Skilldesc="6 months hands on experience"
                                    />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <MobileFooter />
            </motion.div>
        </React.Fragment>
    )
}

export default PortFolioContainer;