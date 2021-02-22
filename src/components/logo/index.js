import react from 'react';
import './style.css';
import logo from '../../images/logo.jpg';

const LogoContainer = () =>{
    return(
        <>
        <div className="logo-field">
            <img src={logo} alt="" />
        </div>
        </>
    )
}

export default LogoContainer;