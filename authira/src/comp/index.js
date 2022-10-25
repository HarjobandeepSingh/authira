
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import himg from '../backg.jpg';
import axios from "axios";
import bell from '../bell.png';
import './ind.css';
export default function Index() {
    var uri = "http://localhost:1000/";
    
    const [data, setdata] = useState([]);
    function getdata(){
    axios.get(uri+'getUsers').then((succ) => {
        setdata(succ.data);
    })
}
useEffect(() => {
    getdata();
}, [])
    return (
        <>
        <div className="navbar ">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <Link to={'/Home'}><img src={logo} /></Link>
                </div>
            </div>
            <ul className="nav navbar-right">
                   
                    <li className="reg"><Link to="/CreatePost">Create Post</Link></li>
            </ul>
        </div>

            <div className="main container-fluid">
              
                 <div className="bod"> 
                 {   data.map((row) => (
            <div className="right ">
                    <div className="container-fluid post" style={{backgroundColor:row.bgcolor, color:row.color,fontFamily:row.fontf,backgroundImage:"url(" +  row.bgimg  + ")"}}>
                    <h4>{row.des}</h4>
                    <h5>~{row.poet}</h5>
                    </div>
                </div> ))} 
           
                   
                </div>
                <div className="sort">

                </div>
            </div>
        </>
    );
}