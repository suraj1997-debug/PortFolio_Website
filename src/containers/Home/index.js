import React from 'react';
import Layout from '../../components/Layout';
import './style.css';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import MobileFooter from '../../components/MobileFooter';
import CVButton from '../../components/UI/CVButton';

const containerVariants = {
    hidden:{
         opacity:0
    },
    visible:{
        opacity:1,
         transition:{ duration:1.5}
    },
    exit:{
        x:'-100vw',
        transition:{delay:.3,ease: 'easeInOut'}
    }
}

// const stepVariants ={
//     visible:{
//       scale:1.1,
        
//         transition:{
//             duration:0.2,
//             yoyo: infinity
//         }
//     }
// } 

const divVariants = {
    hidden:{
        x:'-100vw'
  
   },
   visible:{
        x:'0vw',
        transition:{ type:"spring",stiffness:45,delay:2,duration:3}  //we can use mass , damping on transition for effects also.
   },
   exit:{
       x:'100vw',
       transition:{ease:'easeInOut'}
   }
}

const HomeContainer = (props) => {


    return (
        <React.Fragment>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
             className="Flex-Row"
             style={{overflowY:"hidden"}}>
                <Layout style={{ position: "fixed", width: "20.5rem" }}>
                    <div id="background" style={{  width: "calc(100vw - 20.5rem)", height: "100vh",marginLeft:"19.2rem" }}>
                        <motion.div
                        variants={divVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mid-Content">
                            <div className="heading">
                            <div className="top">
                            <h1>Hello<span>,I am</span></h1>
                            </div>
                            <div className="bottom">
                            <h1>Suraj <span>Bhangu</span></h1>
                            </div>
                            <div          
                             className="steps" style={{display:'flex',alignItems:'baseline'}}>
                                <h2>I am a  </h2>
                                <Typewriter 
                                 options={{
                                    strings: ['Web Developer', 'Web Designer','Mern Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                  }}
                                 />
                            </div>
                            </div>
                            <div className="midfooter">
                                <li><CVButton 
                                name="Hire Me"
                                bgColor="white"
                                Color="black"
                                href={"/contact"}
                                /></li>
                                <li>
                                <CVButton 
                                name="My CV"
                                bgColor="#080813"
                                Color="white"
                                href={"/resume"}
                                /></li>
                            </div>
                            
                        </motion.div>
                    </div>
                </Layout>
                < MobileFooter />
            </motion.div>
        </React.Fragment>
    )
}

export default HomeContainer;

