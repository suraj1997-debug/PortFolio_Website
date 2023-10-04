import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './style.css';
import { motion } from 'framer-motion';
import { FaEnvelope,FaTelegram,FaMapMarkerAlt } from 'react-icons/fa';
import {MdDoneAll, MdPhone} from 'react-icons/md';
import { MaterialInput, MaterialTextArea, MaterialButton } from '../../components/FormUI';
import emailjs from 'emailjs-com';
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
        transition: { delay: .4, ease: 'easeInOut' }
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

const contentVariants = {
    hidden: {
        x:'-100vw'
    },
    visible: {
        x:'0vw',
        transition: { delay: 1.8, type: "spring", stiffness: 40, duration: 3 }
    },
    exit:{
        x: '100vw',
        transition:{ ease: 'easeInOut'}
    }
}

const footerVariants = {
    hidden: {
        y:'100vw'
    },
    visible: {
        y:'0vw',
        transition: { delay: 2, type: "spring", stiffness: 40, duration: 3 }
    },
    exit:{
        y: '100vw',
        transition:{ ease: 'easeInOut'}
    }
}



const ContactContainer = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success,setSuccess] = useState(false);
    
    function sendEmail(e){
        e.preventDefault();
        if (
            name === "" ||
            email === ""|| 
            message === "" 
          ) {
            return;
          }
    emailjs.sendForm('service_66m2bom','template_a7mke05', e.target,'DWw6T0P46804dWUT8',{
        to_name: "suraj"
    })
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setSuccess(true);

       setTimeout(()=>{
        setSuccess(false);
       },3000)

    }, (err) => {
       console.log('FAILED...', err);
       setSuccess(false);
    });
 setName('');
 setEmail('');
 setMessage('');
    }

    
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="Flex-Row">
            <Layout style={{ position: "fixed", width: "20.5rem" }}>
                <div id="contact" style={{ backgroundColor: "black", width: "calc(100vw - 20.5rem)", height: "100vh",marginLeft:"19.2rem" }}>
                    <div className="container">
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="contactHeading">
                            <div className="header">
                                <h1>Contact Me</h1>
                                <span><FaEnvelope /></span>
                            </div>
                            <div className="line">
                            </div>
                        </motion.div>
                        {
                            success ? 
                                     <div className="sentMsg">
                                      <h1>Message Sent<span><MdDoneAll/></span></h1>
                                     </div>
                            :
                            <motion.div
                        variants={contentVariants}
                         initial="hidden"
                         animate="visible"
                         exit="exit"
                        className="contactContent">
                            <div className="contactBody">
                                <h2>Message Box</h2>
                                <form onSubmit={sendEmail}>
                                <div className="rowone">
                                    <MaterialInput
                                        type="text"
                                        label="Name"
                                        value={name}
                                        name="from_name"
                                        autocomplete="off"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <MaterialInput
                                        type="email"
                                        label="Email"
                                        value={email}
                                        autocomplete="off"
                                        name="from_email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="rowtwo">
                                    <MaterialTextArea
                                        label="How can I help you?"
                                        name="message"
                                        value={message}
                                        rows="3"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <MaterialButton
                                    title="Send Message"
                                    bgColor="#ffffff"
                                    textColor="#2874f0"
                                    type="submit"
                                    style={{
                                       display:"grid",
                                       placeItems:"center"
                                    }}
                                />
                                  </form>
                            </div>
                            <motion.div
                              variants={footerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                             className="contactFooter">
                                <p className="footerText"><span><FaTelegram/></span>suraj18903@gmail.com</p>
                                <p className="footerText"><span><FaMapMarkerAlt/></span>I1-106,Yogi Milan Society,Ring Road,Silvassa,Dadra and Nagar Haveli</p>
                                <p className="footerText"><span><MdPhone/></span>7984818881</p>
                            </motion.div>
                        </motion.div>
                        }
                    </div>
                </div>
            </Layout>
           < MobileFooter />
        </motion.div>
    );
}

export default ContactContainer;