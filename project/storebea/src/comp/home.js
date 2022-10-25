import React, { useEffect,useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import im from '../check.png';
import cart from '../cart.png';
import axios from 'axios';
import { data } from "jquery";
// import { Link, useNavigate } from 'react-router-dom';

function Home(){

    const [con , Counter] = useState(0);
    const inc = () => {
        Counter(count => count + 1);
    };
    const dic = () => {
        Counter(count => count - 1);
    };
    const comp = con;

    // var loc = useNavigate();

    function view(x){
        var path = '/?id='+x;
        // loc(path);
    }    

    var arr = [{Task:'Nothing',Date:'22-07-02'}];

    const current = new Date();
    const year = `${current.getFullYear()}`;
    const month = `${current.getMonth()+1}`;
    const date = `${current.getDate()}`;
    var fn = (year+'-0'+month+'-0'+date);
    console.log(fn);

    var uri = 'http://localhost:1000/';

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
            // console.log(succ.data);
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

    function del(x) {
        // alert(x);
        axios.post(uri+'deleteonedata', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                alert('Deleted');
                getdata();
            }
        })
    }
    return(
    <div className="App">
      <header className="App-header">
        <nav className="nabar">
            <div className="container">
                <div className="navbar-header">
                    <div className="navbar-brand">STOREBEA</div>
                </div>
                <ul className="nav nabar-right">
                <li><Link exact to="/" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><img src={cart} /></li>
                </ul>
            </div>
        </nav>
        <div className="counter">

                <button  onClick={dic} disabled={!comp} className='btn btn-warning'  name='btp'> - </button> 
                <input  disabled className='text' value={con} name="text" />
                <button  onClick={inc} disabled={comp == '10'} className='btn btn-success' name="btp"> + </button>

                {/* <button onClick={() => view('apple') }>Click Me</button> */}
        </div>
        <div className="container-fluid bg-warning">
            <div className="inp">
                <input name="todo" /><br/>
                <input type={'date'} name="todo" min={fn} />
            </div>
            <div className="list">
           
                <table>
                    <tr>
                        <th>Tasks</th>
                        <th>Date</th>
                        <th></th>
                    </tr>           
                    {arr.map(({ Task, Date }) => (  <tr>
                       
        <td key={Task}> {Task}</td> <td key={Date}> {Date} </td> <td> <img src={im} /> </td>

                    </tr>      ))}
                    </table>
           
            </div>
        </div>

        <div>
            <form className="col-xs-6 col-xs-offeset-3" onSubmit={handleform}>
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
                        type={'password'}
                        name="password"
                        placeholder="Password"
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
                        type={'submit'}
                        value="Submit"
                        className="btn btn-success"/>
                </div>
            </form>
            <div className="col-xs-8">
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Contact</td>
                        <td>Gender</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row._id}>
                            <td>{row.Name}</td>
                            <td>{row.Email}</td>
                            <td>{row.Password}</td>
                            <td>{row.Contact}</td>
                            <td>{row.Gender}</td>
                            <td>
                                <button onClick={() => del(row._id)} className="btn btn-danger">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
      </header>

    </div>
    );
}
export default Home;