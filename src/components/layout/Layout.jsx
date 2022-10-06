import React from "react";
import './style.css'

// props
const Layout = (props) => {
    return <div className="layout">
        {props.children}
    </div>
};

//  const Layout = ({children}) => {
//     return <div className="layout">{children}</div>
//  };

export default Layout;