import React from "react";
import ReactDom from "react-dom"
import { Link } from "react-router-dom";
class NavBar extends React.Component{
    render(){
        return<>
               <ul>
                 <li ><Link to='/'>Home</Link></li>
                
                 
                 
               </ul>
            </>
    }
}
export default NavBar;
