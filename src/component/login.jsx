// src/component/Login.js
import React from 'react';
import './login.css';

function Login() {
  return (
     <div className="login-container">
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg" alt="Book Logo" />
      </div>

      <div className="login-box">
        <form>
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>

          <a href='' className="btn login-btn">Login </a>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
