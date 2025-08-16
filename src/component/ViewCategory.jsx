// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "./ViewCategory.css";
// import AdminSidebar from "./adminslidebar.jsx";
// import viewcat from "../service/Datasevice.js";


// const viewcat = () => {
//   const [category, setCategory] = useState([]);
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = () => {
//     viewcat.saveviewCategory() // Ensure this method exists in your service
//       .then((result) => {
//         setCategory(result.data.category); // Adjust based on your API response
//         setMsg("");
//       })
//       .catch((err) => {
//         setMsg("Failed to load categories");
//       });
//   };

//   return (
//     <div className="main2">
//       <AdminSidebar />
//       <div className="form1">
//         <h2>Category List</h2>
//         {msg && <p style={{ color: "red", marginTop: "10px" }}>{msg}</p>}
//         {category.length === 0 ? (
//           <p>No categories found.</p>
//         ) : (
//           <ul>
//             {category.map((cat) => (
//               <li key={cat.category_id}>{cat.category_name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewCategory;
