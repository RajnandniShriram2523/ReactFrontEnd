import React, { useEffect, useState } from "react";
import AdminSidebar from "./adminslidebar.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ViewCategory.css";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");

  // Fetch categories from backend
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories"); // ✅ Your backend endpoint
      setCategories(res.data);
    } catch (err) {
      setMsg("Error fetching categories");
      console.error(err);
    }
  };

  return (
    <div className="ffff">
      <AdminSidebar />
      <div className="container">
        <h2>View Categories</h2>
        {msg && <p className="error-message">{msg}</p>}
        <table>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>Category Name</th>
              <th>DELETE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/deletecategory/${category.id}`} className="delete-link">
                      Delete
                    </Link>
                  </td>
                  <td>
                    <Link to={`/updatecategory/${category.id}`} className="update-link">
                      Update
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
