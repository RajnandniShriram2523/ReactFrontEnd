// src/component/Login.js
import React from 'react';
import './login.css';

function Login() {
  return (
    <div className='logincontainer'>
    <div className="neumorphic-wrapper">
      <form className="neumorphic-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      
    </div>
    </div>
  );
}

export default Login;
