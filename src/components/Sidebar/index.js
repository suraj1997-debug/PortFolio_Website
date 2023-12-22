import React from 'react';
import SidebarNav from '../Nav';
import MobileNav from '../MobileNav';
import './style.css';
import { FaHome, FaUserCircle, FaBriefcase, FaEnvelope, FaBars, FaChartBar, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import loader from '../../images/loader.gif';
import { urlgenerate } from '../../urlConfig';
import LogoContainer from '../logo';

const sidebarvariants = {
    hidden: {
        opacity: 0,
        y: '-100vw'
    },
    visible: {
        opacity: 1,
        y: '0vw',
        transition: { type: "tween", delay: 1, duration: 1 }
    },
    exit: {
        y: '100vw',
        transition: { ease: 'easeInOut' }
    }
}



const Sidebar = (props) => {


    let links = [
        { label: "Home", link: "/", icon: <FaHome /> },
        { label: "About Me", link: "/about", icon: <FaUserCircle /> },
        { label: "SkillSets", link: "/skillsets", icon: <FaChartBar /> },
        { label: "Projects", link: "/project-categories", icon: <FaBriefcase /> },
        // { label: "Blog" , link:"/blog",icon:<FaBook/>},
        { label: "Contact", link: "/contact", icon: <FaEnvelope /> }
    ]


    const resumes = useSelector(state => state.resume.allresumes.getResume);
    const loading = useSelector(state=>state.resume.loading);

    return (
        <React.Fragment>
            <input type="checkbox" id="check" />
            <div className="sidebar" style={props.style}>
                <label for="check" style={{ display: "none" }}>
                    <LogoContainer/>
                    <h1 id="sidebar_btn"><FaBars /></h1>
                </label>
                <div className="Mobilecontent" >
                    <div className="navbar-content" >
                        <ul>
                            <MobileNav links={links} />
                        </ul>
                    </div>
                </div>

                <motion.div
                    variants={sidebarvariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="sidebar-container">

                    <div className="profilecontainer">
                        {
                            loading ? <div style={{display:"grid",placeItems:"center",width:"100%",height:"100%",backgroundColor:"whitesmoke"}}><img src={loader} alt="" style={{position:"unset",width:"unset",height:"unset",objectFit:"unset"}}/></div>
                            :
                            resumes && resumes.map((resume, index) =>
                                <img src={urlgenerate(resume.profile)} alt="" />
                            )
                        }
                    </div>
                    <h1>Suraj<span>&nbsp;Bhangu</span></h1>
                    <div className="contentbottom">
                        <div className="sidebar-content">
                            <ul>
                                <SidebarNav links={links} />

                            </ul>
                        </div>
                        <div className="Footer">
                            <h1>2020 © SurajBhangu| </h1>
                            <span>All Rights Reserved.</span>
                            <h1 style={{paddingTop:"1rem",color:"brown"}}>Follow Me on:</h1>
                            <div className="sidebarfootericons">
                                {/* <a href="https://www.facebook.com/suraj.jeetendra.bhangu"><FaFacebook /></a> */}
                                <a href="https://www.instagram.com/surajjsingh1997"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/suraj-bhangu"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;