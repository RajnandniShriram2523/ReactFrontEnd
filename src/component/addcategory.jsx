import React from "react";
import ReactDom from 'react-dom';
import  './addcategory.css'
import AdminSidebar from "./adminslidebar";
export default class Addcategory extends React.Component{
    

   constructor(){
    super();
    this.state={
        category_name:""
    }
}

    render(){

        return <>
        
        <div class="main">
            <AdminSidebar />
             
       
        
            <div class="form">
            <input type='text' name='name' value='' placeholder="Enter Category" />
            <br></br><br></br>
            <a href="" className="btn">Add Category</a>
            
            
        </div>
                 </div>
       
        </>
    }
}