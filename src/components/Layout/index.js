import React from 'react';
import Sidebar from '../Sidebar';

const Layout = (props) =>{
    return(
        <React.Fragment>
        <Sidebar style={props.style}/>
        {props.children}
        </React.Fragment>
    )
}

export default Layout;