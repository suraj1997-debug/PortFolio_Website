import React from 'react';
import { NavLink} from 'react-router-dom';
import './style.css';

const CVButton = (props) =>{
    const onClick  = () =>{
        props.onClick && props.onClick();
    }
    return(
        <React.Fragment>
        <NavLink className = "midbtn"
        to={`${props.href}`} 
        style={{
          backgroundColor: props.bgColor,
          color: props.Color
        }}
        onClick={onClick}
        >
            {props.name && props.name}
        </NavLink>
        </React.Fragment>
    )
}

export default CVButton;