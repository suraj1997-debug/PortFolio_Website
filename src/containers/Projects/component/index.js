import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import './style.css';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { getSingleProjectCategoryByProjectSlug, getprojectBySlug } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MobileFooter from '../../../components/MobileFooter';
import RightMe from '../../../images/portfolio_right.png';
import LeftMe from '../../../images/portfolio_left.png';
import loader from '../../../images/loader.gif';
import { urlgenerate } from '../../../urlConfig';
import { IoArrowUndoCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';


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
        transition: { delay: .3, ease: 'easeInOut' }
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

const projectVariants = {
    hidden: {
        y: '100vw'
    },
    visible: {
        y: '0vw',
        transition: { delay: 0.8, type: "tween", duration: 3 }
    },
    exit: {
        y: '100vw',
        transition: { ease: 'easeInOut' }
    }
}
function ProjectSlugContainer(props) {
    const { slug } = props.match.params;
    console.log(slug);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProjectCategoryByProjectSlug(slug));
        dispatch(getprojectBySlug(slug));
    }, [])

    const project = useSelector(state => state.project.project);
    const projectCategory = useSelector(state => state.project?.projectCategory);
    const formatDate = (date) => {
        if (date) {
            const d = new Date(date);
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        }
        return "";
    };

    const loading = useSelector(state => state.project.loading);

    return (
        <React.Fragment>
            {
                loading ?

                    <div className="loader"><img src={loader} alt="" /></div>

                    :
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="Flex-Row" style={{ backgroundColor: "black" }}>
                        <Layout style={{ position: "fixed", width: "20.5rem" }}>
                            <div id="project" style={{ backgroundColor: "black", width: "calc(100vw - 20.5rem)", height: "100vh", marginLeft: "19.2rem" }}>
                                <div className="container">
                                    <motion.div
                                        variants={headerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="projectHeading">
                                        <div className="header">
                                            <h1> 
                                            <Link to={`/projects/${projectCategory?.slug}`} style={{color:"white"}}><IoArrowUndoCircle /></Link>
                                            {`  ${project.projectTitle}`}</h1>
                                            <span><FaBriefcase /></span>
                                        </div>
                                        <div className="line">
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={projectVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="projectContent">
                                        <div className="projectImage">
                                            <img src={project.frontend && urlgenerate(project.frontend[0].img)} alt="" />

                                        </div>
                                        <div className="info">
                                            <div className="info-container" style={{ marginBottom: "2rem" }}>
                                                <div className="infoContent">
                                                    <h1>Title:<span style={{ marginBottom: "1rem" }}>{project.projectTitle}</span></h1>
                                                    <h1>Project Type:<span>{project.projectType}</span></h1>
                                                    <h1>Upload Date:<span style={{ marginBottom: "1rem" }}>{formatDate(project.date)}</span></h1>
                                                    <h1>Github URL:<a href={project.url}>{project.url}</a></h1>
                                                </div>
                                            </div>
                                            <div className="RightImg">
                                                <img src={RightMe} alt="" />
                                            </div>
                                        </div>
                                        <div className="desc_content_container">
                                            <div className="LeftImg">
                                                <img src={LeftMe} alt="" />
                                            </div>
                                            <div className="content">
                                                <h1>Description:</h1><span>{project.description}</span>
                                            </div>
                                        </div>
                                                <div className="imageslayoutOne">
                                                    <div className="imageOne">
                                                        <Carousel renderThumbs={() => { }}>
                                                            {
                                                                project.frontend && project.frontend.map((front, index) =>
                                                                    <div key={index}
                                                                        style={{ display: "block" }}

                                                                    >
                                                                        <img src={urlgenerate(front.img)} alt="" />
                                                                    </div>
                                                                )
                                                            }

                                                        </Carousel>
                                                    </div>
                                                    <h1>{projectCategory?.Category != "Websites" ? project?.projectTitle : "Website"}<span style={{ paddingLeft: "1rem" }}>Images List</span></h1>
                                                </div>
                                                <div className="imageslayoutTwo">
                                                    <h1>Dashboard<span style={{ paddingLeft: "1rem" }}>Images List</span></h1>
                                                    <div className="imageTwo">
                                                        <Carousel renderThumbs={() => { }}>
                                                            {
                                                                project.admindashboard && project.admindashboard.map((admin, index) =>
                                                                    <div key={index}
                                                                        style={{ display: "block" }}

                                                                    >
                                                                        <img src={urlgenerate(admin.img)} alt="" />
                                                                    </div>
                                                                )
                                                            }

                                                        </Carousel>
                                                    </div>
                                                </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Layout>
                        < MobileFooter />
                    </motion.div>
            }
        </React.Fragment>
    )

}

export default ProjectSlugContainer;