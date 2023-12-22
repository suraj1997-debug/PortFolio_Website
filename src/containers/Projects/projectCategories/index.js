import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import './style.css';
import {motion} from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import Card from '../../../components/UI/Card';
import { Link } from 'react-router-dom';
import MobileFooter from '../../../components/MobileFooter';
import websiteImage from '../../../images/website.jpg';
import designImage from '../../../images/design.jpg';
import othersImage from '../../../images/others.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectCategories } from '../../../redux/store';
// import loader from '../../../images/loader.gif';
 

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

const ProjectCategoriesContainer=(props)=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProjectCategories());
    },[])

    // const loading = useSelector(state=>state.project.loading);
    const project = useSelector(state => state?.project);
    

    return(
        <React.Fragment>
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
                                <h1>Project Categories</h1>
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
                                <Link to={`/projects/${project?.projectCategories?.[1]?.slug}`}>
                                        <Card
                                        img={websiteImage}
                                        domain= "Development"
                                        title= "Websites"
                                        />
                                        </Link>
                                        <Link to={`/projects/${project?.projectCategories?.[2]?.slug}`}>
                                        <Card
                                        img={designImage}
                                        domain= "Design"
                                        title="Design Layouts"
                                        />
                                        </Link>
                                        <Link to={`/projects/${project?.projectCategories?.[0]?.slug}`}>
                                        <Card
                                        img={othersImage}
                                        domain= "Development"
                                        title= "Other Projects"
                                        />
                                        </Link>
                            </motion.div>
                        </div>
                    </div>
        </div>
        </Layout>
        < MobileFooter />
        </motion.div>
        </React.Fragment>
    )
}

export default ProjectCategoriesContainer;