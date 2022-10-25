import React, { useEffect,useState } from "react";
import logo from '../acw.png';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register(){
    var uri = "http://localhost:1000/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Name: data.get('name'),
            Email: data.get('email'),
            Password: data.get('password'),
            Contact: data.get('contact'),
            Gender: data.get('gender'),
        }
        axios.post(uri+'AddUser', obj).then((succ) => {
             console.log(succ);
            if(succ.data == "ok"){
                alert('Data Added');
                getdata();
                e.target.reset();
                e.target.name.focus();
            }
        })

    }

    const [data, setdata] = useState([]);
    function getdata(){
        axios.get(uri+'getUsers').then((succ) => {
            setdata(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])



    return(
        <>

        <Link className="rg" to={'/'}><img src={logo} /></Link>  
        <div className="bg-form">  
            <div className="form container">
                <h1>Register Here</h1>
                <form className="form" onSubmit={handleform}>
                <div className="form-group">
                    <input
                        type={'text'}
                        name="name"
                        placeholder="Name"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <input
                        type={'email'}
                        name="email"
                        placeholder="Email"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <input
                        type={'tel'}
                        name="contact"
                        placeholder="Contact"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <select
                        name="gender" 
                        className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type={'password'}
                        name="password"
                        placeholder="Password"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <input
                        type={'password'}
                        name="cpassword"
                        placeholder="Confirm Password"
                        className="form-control" />
                </div>
                <span>If you already registered the <Link to="/Login">Login Here </Link>. </span>
             
                <div className="form-group">
                    <input 
                        type={'submit'}
                        value="Submit"
                        name="submit"
                        className="btn btn-success"/>
                </div>
                </form>
            </div>
        </div>
        </>
    );
}