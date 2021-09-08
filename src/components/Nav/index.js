import React from 'react';
import { NavLink} from 'react-router-dom';
import './style.css';
import { motion } from 'framer-motion';

const buttonVariants= {
    hover:{
            originX:0,
            scale:1.1,
            transition:{
                type:"spring",
                stiffness:120,
                mass:0.4,
                damping:8
            }
    }
}

const SidebarNav = (props) =>{

    let nav;

    nav = props.links.map((link,index)=>{

        let singlelink = ( <NavLink exact activeClassName="active" className="button" to={link.link}
       
        ><span>{link.icon}</span>{link.label}</NavLink>)

    return(
    <motion.li key={index}
    variants={buttonVariants}
    whileHover="hover"
    >
     {singlelink}
      </motion.li>
    );
})

  
    return(
        <React.Fragment>
      { nav}                            
        </React.Fragment>
    );
}

export default SidebarNav;