import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home";
import About from "./about";
import Contact from "./contact"
import Login from './component/login'
import './App.css';






class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Online Job Portal</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/"></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to=" ">Service</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a href="/login" className="login_btn">Login</a>
          </div>
        </nav>

        <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  {/* <Route path="/about" element={<About />} /> */}
<Route path="/login" element={<Login />} />

</Routes>
      </BrowserRouter>
    );
  }
}




export default App;

