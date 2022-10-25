import React, { useEffect,useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../Login.css';
import axios from 'axios';

 function Login(){
    var url = 'http://localhost:1000/';
    function handleform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Email : data.get('email'),
            Password : data.get('password'),
        }
        if(getdata() == null){
            alert('good');
        }
        const [data, setdata] = useState([]);
        function getdata(){
            axios.get(url+'getUsers').then((succ) => {
                setdata(succ.data);
            })
        }
    }



    return(
        <>
            <form className="container" onSubmit={handleform}>
                <h1>Login Here</h1>
                <div className="form-group">
                    <input 
                    className="form-control"
                    name="email"
                    placeholder="Enter youer registerd email id"
                    type={'email'}
                    />
                </div>
                <div className="form-group">
                    <input 
                    className="form-control"
                    name="password"
                    placeholder="Enter youer Password"
                    type={'password'}
                    />
                </div>
                <div className="form-group">
                    <input 
                    className="form-control     "
                    name="submit"
                    value={'Submit'}
                    type={'submit'}
                    />
                </div>
            </form>
        </>
    );
}
export default Login;