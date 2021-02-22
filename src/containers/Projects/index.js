import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import './style.css';
import {motion} from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import Card from '../../components/UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/store';
import { Link } from 'react-router-dom';
import MobileFooter from '../../components/MobileFooter';
import loader from '../../images/loader.gif';
import { urlgenerate } from '../../urlConfig';
 

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
        transition:{delay:.4,ease: 'easeInOut'}
    }
}

const headerVariants = {
    hidden:{
         y:'-100vw'
    },
    visible:{
         y:'0vw',
         transition:{ delay:0.5,type:"spring",stiffness:40,duration:3}
    },
    exit:{
        y:'-100vw',
        transition:{ease:'easeInOut'}
    }
}

const bodyVariants = {
    hidden:{
         x:'-50vw'
    },
    visible:{
         x:'0vw',
         transition:{ delay:.1,type:"spring",stiffness:"120",duration:4}
    },
    exit:{
        x:'100vw',
        transition:{ease:'easeInOut'}
    }
}





const ProjectContainer=(props)=>{

    const dispatch = useDispatch();
    const project = useSelector(state=>state.project);

    const loading = useSelector(state=>state.project.loading);

  useEffect(()=>{
    dispatch(getProjects());
  },[])

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
    }
    return "";
  };

    return(
        <>
          {
            loading ? 
       
            <div className="loader"><img src={loader} alt=""/></div>
           
            : 
            
        <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
        className="Flex-Row" style={{ backgroundColor: "black" }}>
        <Layout style={{ position: "fixed", width: "20.5rem" }}>
        <div id="project" style={{backgroundColor:"black" , width:"calc(100vw - 20.5rem)",height:"100vh", marginLeft: "19.2rem"}}>
        <div className="container">
                        <motion.div
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                         className="projectHeading">
                            <div className="header">
                                <h1>Projects</h1>
                                <span><FaBriefcase/></span>
                            </div>
                            <div className="line">
                            </div>
                        </motion.div>
                        <div className="projectContent" style={{justifyContent:"unset !important"}}>
                            <motion.div
                            variants={bodyVariants}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                             className="projectContainer">
                                 {
                                  project.projects.map(project=>
                                        <Link to={`/${project.slug}`}>
                                        <Card
                                        img={urlgenerate(project.frontend[0].img)}
                                        domain={project.projectType}
                                        title={project.projectTitle}
                                        date={formatDate(project.date)}
                                        />
                                        </Link>
                                        )
                                 }
                               
                               
                            </motion.div>
                        </div>
                    </div>
        </div>
        </Layout>
        < MobileFooter />
        </motion.div>
}
        </>
    )
}

export default ProjectContainer;