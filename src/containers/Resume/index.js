import React from 'react';
import Layout from '../../components/Layout';
import './style.css';
import { motion } from 'framer-motion';
import { FaWpforms, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaTelegramPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import loader from '../../images/loader.gif';
import { urlgenerate } from '../../urlConfig';
import MobileFooter from '../../components/MobileFooter';
import axios from '../../components/helpers/axios';
import {saveAs} from 'file-saver';
import {url} from '../../urlConfig';


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
        transition: { delay: .6, ease: 'easeInOut' }
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

const formContainerVariants = {
    hidden: {
        y: '100vw'
    },
    visible: {
        y: '0vw',
        transition: { delay: 0.6, type: "tween", duration: 3 }
    },
    exit: {
        x: '100vw',
        transition: { delay: .4, ease: 'easeInOut' }
    }
}

const formVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: '0vw',
        transition: { delay: 3.7, type: "spring", stiffness: 30, duration: 4 }
    },
    exit: {
        x: '100vw',
        transition: { delay: .2, ease: 'easeInOut' }
    }
}



const ResumeContainer = (props) => {




    const resumes = useSelector(state => state.resume.allresumes.getResume);

    const loading = useSelector(state=>state.resume.loading);

    const downloadResumePdf = (resume) =>{
        // axios.post(`/generateResumePdf`,{resume:resume},
        // // {
        // // 	headers: {
        // // 	  'Content-Type': 'multipart/form-data'
        // // 	},
        // // 	responseType: 'arraybuffer'
        // // }
        // )
        // .then((data) => {
        //     console.log("PDF Generated", data);
            // alert.success('Agreement Pdf generated successfully')
            // async function printTickets() {
                    
                //   }
                //   async function getTicketsPdf(fileName){
                    return axios.get(`${url}/downloadResumePdf/${resume.pdf}`,
                        {
                                headers: {
                                  'Content-Type': 'multipart/form-data'
                                },
                                responseType: 'arraybuffer'
                            }
                        ).then(({data})=>{ 
                            const blob = new Blob([data], { type: 'application/pdf' })
                            saveAs(blob, "resumeform.pdf")
                        })
                        .catch((err)=>console.log(err))
                // }
        // })
        // .catch(err => {
        //   console.log('error', err)
        // })
    }

    return (
        <React.Fragment>
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
                <div id="resume" style={{ backgroundColor: "black", width: "calc(100vw - 20.5rem)", height: "100vh",marginLeft:"19.2rem" }}>
                    <div className="container">
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="resumeHeading">
                            <div className="header">
                                <h1>My CV</h1>
                                <span><FaWpforms /></span>
                            </div>
                            <div className="line">
                            </div>
                           
                        </motion.div>
                        <div className="resumeContent">
                            
                         <motion.div
                                variants={formContainerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="resumeContainer">
                                  
                                {
                                    resumes && resumes.map((resume, index) =>
                                        <motion.div
                                            variants={formVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            
                                            key={index}
                                        >
                                             <div style={{display:"flex",justifyContent:"flex-end"}}> 
                            <button style={{
                                backgroundColor:"white",
                            padding:"1rem 2rem",
                            margin:"1rem",
                            color:"black",
                            borderRadius:"1rem",
                            textTransform:"uppercase",
                            fontWeight:"bold",
                            fontSize:"1rem"}} onClick={()=>downloadResumePdf(resume)}>Download Pdf</button>
                            </div>
                            <div className="resumeform">
                                            <div className="left">
                                                <div className="profileimage">
                                                    <img src={urlgenerate(resume.profile)} alt="" />
                                                </div>
                                                <div className="left-content">
                                                    <div className="leftOne">
                                                        <h1>{resume.FullName}</h1>
                                                        <p>{resume.Designation}</p>
                                                        <div className="personalprofileicons">
                                                            <div className="profileicon">
                                                                <span><FaMapMarkerAlt /></span>
                                                                <p>{resume.Address}</p>
                                                            </div>
                                                            <div className="profileicon">
                                                                <span><FaPhoneAlt /></span>
                                                                <p>{resume.Contact}</p>
                                                            </div>
                                                            <div className="profileicon">
                                                                <span><FaMailBulk /></span>
                                                                <p>{resume.Email}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="leftLine"></div>
                                                    <div className="leftTwo">
                                                        <h1>Skills</h1>
                                                        <div className="skillcontent">
                                                            {
                                                                resume.SkillSets.map((skill, index1) =>
                                                                    <p key={index1}><span></span>{skill.Skill}</p>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="leftLine"></div>
                                                    <div className="leftThree">
                                                        <h1>Interests</h1>
                                                        <div className="interestContent">
                                                            {
                                                                resume.Interests.map((interest, index2) =>
                                                                    <p key={index2}><span></span>{interest.interest}</p>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="leftLine"></div>
                                                    <div className="leftFour">
                                                        <h1>Personal Strengths</h1>
                                                        <div className="strengthContent">
                                                            {
                                                                resume.PersonalStrengths.map((strength, index3) =>
                                                                    <p key={index3}><span></span>{strength.strength}</p>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="leftLine"></div>
                                                    <div className="leftFive">
                                                        <h1>Social</h1>
                                                        <div className="social-icons">
                                                            {
                                                                resume.Social.map((icon, indexing) =>
                                                                    <div className="social"
                                                                    key={indexing}
                                                                    >
                                                                        <span><FaTelegramPlane /></span>
                                                                        <div className="righticondesc">
                                                                            <p className="nameicon">{icon.name}</p>
                                                                            <p style={{fontSize:"1rem"}}>{icon.mail}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="aboutme">
                                                    <h1>Summary</h1>
                                                    <p>{resume.About}</p>
                                                </div>
                                                <div className="rightLine"></div>
                                                <div className="internship">
                                                    <h1>Internship</h1>
                                                    {
                                                        resume.Internship.map((intern, index4) =>
                                                            <div className="internContent"
                                                                key={index4}
                                                            >
                                                                <div className="internLeft">

                                                                </div>
                                                                <div className="internRight">
                                                                    <div className="intern">
                                                                        <h2>{intern.CompanyName}</h2>
                                                                        <p>{intern.Description}</p>
                                                                        <h3>{intern.From}-{intern.To}</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="rightLine"></div>
                                                <div className="education">
                                                    <h1>Education</h1>
                                                    <div className="educationContent">
                                                        {
                                                            resume.Education.map((educate, index5) =>
                                                                <div className="educate"
                                                                    key={index5}
                                                                >
                                                                    <div className="educateLeft">

                                                                    </div>
                                                                    <div className="educateRight">
                                                                        <h3>{educate.InstituteName}</h3>
                                                                        <p>{educate.Course}</p>
                                                                        <p>{educate.Score}</p>
                                                                        <p>{educate.Duration}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>

                                                </div>
                                                <div className="rightLine"></div>
                                                <div className="projects">
                                                    <h1>Projects</h1>
                                                    <div className="projectContent">
                                                        {
                                                            resume.Projects.map((project, index6) =>
                                                                <div className="project"
                                                                    key={index6}
                                                                >
                                                                    <div className="projectLeft">

                                                                    </div>
                                                                    <div className="projectRight">
                                                                        <h3>{project.ProjectName}</h3>
                                                                        <p>Project:<span>{project.ProjectType}</span></p>
                                                                        {project.TechnologiesUsed && <p>Technologies Used:{project.TechnologiesUsed}</p>}
                                                                        {project.ProjectDescription && <p>Description:{project.ProjectDescription}</p>}
                                                                        {project.GithubURL && <p>Github URL:{project.GithubURL}</p>}
                                                                    </div>
                                                                </div>

                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="rightLine"></div>
                                                <div className="achievements">
                                                    <h1>Achievements And Awards</h1>
                                                    <div className="achievementContent">
                                                        {
                                                            resume.Achievements.map((achieve, index7) =>
                                                                <div className="achievement"
                                                                    key={index7}
                                                                >
                                                                    <div className="achieveLeft"></div>
                                                                    <p>{achieve.Achieve}</p>

                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                     </div> 
                                        </motion.div>
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
        </React.Fragment>
    );
}

export default ResumeContainer;