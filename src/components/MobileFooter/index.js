import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css';

const MobileFooter = (props) => {
    return (
        <React.Fragment>
            <div className="Mobile-Footer">
                <h1>2020 © SurajBhangu<span>|All Rights Reserved.</span></h1>
                <div className="mobilefootericons">
                <h1>Follow Me on:</h1>
                {/* <a href="https://www.facebook.com/suraj.jeetendra.bhangu"><FaFacebook/></a> */}
                <a href="https://www.instagram.com/surajjsingh1997"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/suraj-bhangu"><FaLinkedin/></a>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default MobileFooter;
