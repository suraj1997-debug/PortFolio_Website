import React from 'react';
import Sidebar from '../Sidebar';

const Layout = (props) =>{
    return(
        <>
        <Sidebar style={props.style}/>
        {props.children}
        </>
    )
}

export default Layout;