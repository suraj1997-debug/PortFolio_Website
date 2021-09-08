import React from 'react';
import './style.css';
import logo from '../../images/logo.jpg';

const LogoContainer = () =>{
    return(
        <React.Fragment>
        <div className="logo-field">
            <img src={logo} alt="" />
        </div>
        </React.Fragment>
    )
}

export default LogoContainer;