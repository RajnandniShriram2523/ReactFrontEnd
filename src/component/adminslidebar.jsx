import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './adminslidebar.css';

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoryOpen: false,
      isStudentOpen: false,
      isBookOpen: false,
    };
  }

  toggleCategory = () => {
    this.setState(prevState => ({
      isCategoryOpen: !prevState.isCategoryOpen,
    }));
  };

  toggleStudent = () => {
    this.setState(prevState => ({
      isStudentOpen: !prevState.isStudentOpen,
    }));
  };

  toggleBook = () => {
    this.setState(prevState => ({
      isBookOpen: !prevState.isBookOpen,
    }));
  };

  render() {
    const { isCategoryOpen, isStudentOpen, isBookOpen } = this.state;

    return (
      <div>
        <aside className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            {/* Category Menu */}
            <li onClick={this.toggleCategory} className="has-submenu">
              <span className="arrow">{isCategoryOpen ? '▼' : '▶'}</span>
              <Link to="#">Category</Link>
            </li>
            {isCategoryOpen && (
              <ul className="submenu">
                <li><Link to="/addcategory">Add Category</Link></li>
                <li><Link to="/viewcategory">View Category</Link></li>
              </ul>
            )}

            {/* Student Menu */}
            <li onClick={this.toggleStudent} className="has-submenu">
              <span className="arrow">{isStudentOpen ? '▼' : '▶'}</span>
              <Link to="#">Student</Link>
            </li>
            {isStudentOpen && (
              <ul className="submenu">
                <li><Link to="/addstudent">Add Student</Link></li>
                <li><Link to="/viewstudent">View Student</Link></li>
              </ul>
            )}

            {/* Book Menu */}
            <li onClick={this.toggleBook} className="has-submenu">
              <span className="arrow">{isBookOpen ? '▼' : '▶'}</span>
              <Link to="#">Book</Link>
            </li>
            {isBookOpen && (
              <ul className="submenu">
                <li><Link to="/addbook">Add Book</Link></li>
                <li><Link to="/viewbook">View Book</Link></li>
              </ul>
            )}

            {/* Other static links */}
            {/* <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/settings">Settings</Link></li> */}
          </ul>
        </aside>
      </div>
    );
  }
}

export default AdminSidebar;
