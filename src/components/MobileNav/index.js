import React from 'react';
import { NavLink} from 'react-router-dom';
import './style.css';


const MobileNav = (props) =>{

    let nav;

    nav = props.links.map((link,index)=>{

        let singlelink = ( <NavLink className="bt-btn" exact activeClassName="activeMobile"  to={link.link}
       
        ><span>{link.icon}</span>{link.label}</NavLink>)

    return(
    <li key={index} >
     {singlelink}
      </li>
    );
})

  
    return(
        <React.Fragment>
      { nav}                            
        </React.Fragment>
    );
}

export default MobileNav;