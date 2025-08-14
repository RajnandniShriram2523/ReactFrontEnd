import React from "react";
import "./ViewBook.css";
import AdminSidebar from "./adminslidebar.jsx";
import { Link } from "react-router-dom";

const ViewBook = () => {
  return (
    <div className="bbbb">
      <AdminSidebar />
      <div className="book_container">
        <h2>View Books</h2>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Published Date</th>
              <th>ISBN Code</th>
              <th>Category ID</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Horror</td>
              <td>Stephen King</td>
              <td>299.99</td>
              <td>2023-06-10</td>
              <td>1234567890</td>
              <td>2</td>
              <td>Available</td>
              <td>
                <Link to="/delete/1" className="delete-book">Delete</Link>
              </td>
              <td>
                <Link to="/update/1" className="update-book">Update</Link>
              </td>
            </tr>
            {/* Repeat <tr> for other books or map over API data later */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBook;
