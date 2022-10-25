import React, { useState } from "react";
import '../App.css';

function About(){
    function handeform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var name = data.get('name');
        var email = data.get('email');
        console.log(name);
        console.log(email);

        e.target.reset();
        e.target.focus();
    }
    return(
        <div>
        <form onSubmit={handeform}>
            <input type={'text'} name='name' placeholder='Name' /><br/>
            <input type={'email'} name='email' placeholder='E - mail' /><br/>
            <input type={'Submit'} name='Submit' value={'Submit'} />
        </form>
        <h1></h1>
        </div>
    );
}
export default About;