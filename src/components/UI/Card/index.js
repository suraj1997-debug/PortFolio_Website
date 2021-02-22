import { motion } from 'framer-motion';
import React from 'react';
import './style.css';

const hoverVariants = {
    hidden:{
        opacity:0.7
    },
    hoveranimate:{
        opacity:1,
        scale:1.1
    }
}
const Card = (props) =>{
    return(
        <>
        <div className="Card">
            <div className="Card-container">
                <div className="image" style={{overflow:"hidden"}}>
                   <motion.img
                   variants={hoverVariants}
                   initial="hidden"
                   whileHover="hoveranimate"
                   src={props.img} alt=""/>
                </div>
                <div className="Card-content">
                    <div className="contentcontain">
                    <p style={{ color:"rgb(29, 101, 105)"}}>{props.domain}</p>
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;