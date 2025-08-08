// src/component/Login.js
import React from 'react';
import {Link} from "react-router-dom";
import './login.css';

function Login() {
  return (
    <div className='logincontainer'>
    <div className="neumorphic-wrapper">
      <form className="neumorphic-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {/* <button><a href="/admindashboard">Login</a></button> */}
        <Link to="/admindashboard" className="btn btn-primary">Login</Link>
      </form>
      
    </div>
    </div>
  );
}

export default Login;
