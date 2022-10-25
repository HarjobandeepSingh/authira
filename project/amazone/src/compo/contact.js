import React from "react";
import '../App.css';

function Contact(){
    return(
        <header className="App-header">
       <nav>
        <div className="logo">STOREBEA</div>
        <div className="rightnav">
            <a href="./home.js" >Home</a>
            <a href="./about.js" >About Us</a>
            <a href="./contact.js" >Contact Us</a>
            <a href="./signup.js" >Sign Up</a>
        </div>
       </nav>
       <h1>Contact</h1>
      </header>
    );
}
export default Contact;