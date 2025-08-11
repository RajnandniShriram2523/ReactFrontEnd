import React from "react";
import ReactDom from 'react-dom';
// import  './addbook.css'
import AdminSidebar from "./adminslidebar";
export default class Addbook extends React.Component{
    

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
             
       
        </div>
       
        </>
    }
}