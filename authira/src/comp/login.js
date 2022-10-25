import React, { useEffect,useState } from "react";
import axios from "axios";
import logo from '../acw.png';
import { Link } from "react-router-dom";


export default function Login(){
    var uri = "http://localhost:1000/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            email: data.get('email'),
            password: data.get('password'),
        }
       console.log(uri+'Login',obj);
        axios.post(uri+'Login',obj).then((succ) => {
             console.log(succ.data);
            if(succ.data == "allok"){
                alert('get');
                window.location = "/index";
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

    console.log();
    return(

        <>
         <Link className="rg" to={'/'}><img src={logo} /></Link>
        <div className="bg-form">  
            <div className="form container">
                <h1>Login Here</h1>
                <form className="form" onSubmit={handleform} method="POST">
                <div className="form-group">
                    <input
                        type={'email'}
                        name="email"
                        placeholder="Email"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <input
                        type={'password'}
                        name="password"
                        placeholder="Password"
                        className="form-control" />
                </div>
                <span>If you are not registered yet then <Link to="/Register"> Register Here </Link>. </span>
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