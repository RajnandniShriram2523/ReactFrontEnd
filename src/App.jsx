import React from "react";
import { BrowserRouter, Routes, Route, NavLink ,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Login from './component/login';
import AdminSidebar from './component/adminslidebar';
import AddCategory from './component/addcategory';
// import Admindashboard from "./component/admindashboard";
import './App.css';
import Addbook from "./component/addbook";
import AddStudent from "./component/addstudent";



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
     <nav className="navbar navbar-expand-lg  ">
          <NavLink className="navbar-brand" to="/"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c46c7f62556223.5a945f059c90e.png"/></NavLink>
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
                <NavLink className="nav-link" to="services"></NavLink>
              </li>
            </ul>
          </div>
          <div>
        <Link to="/login" className=" btn-primary">Login</Link>
            {/* <a href="/login" className="login_btn">Login</a> */}
          </div>
        </nav>

        <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  {/* <Route path="/admindashboard" element={<Admindashboard />} /> */}
  <Route path="/adminsildebar" element={<AdminSidebar />} />
<Route path="/addcategory" element={<AddCategory />} />
<Route path="/addbook" element={< Addbook/>}/>
<Route path="/addstudent" element={<AddStudent/>} />
</Routes>
      </BrowserRouter>
    );
  }
}




export default App;

