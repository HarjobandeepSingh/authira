import React from "react";
import '../App.css';
import About from "./about.js";
import { Link } from "react-router-dom";


function Home(){
    return(
        <header className="App-header">
       <nav>
        <div className="logo">STOREBEA</div>
        <div className="rightnav">   
            <link to="/home.js">Home</link>
            <link to={About} >About Us</link>
            <link to="/contact.js" >Contact Us</link>
            <link to="/signup.js" >Sign Up</link>
        </div>
       </nav>
      </header>
    );
}
export default Home;