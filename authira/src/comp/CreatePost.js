
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import React, { useEffect,useState } from "react";
import bell from '../bell.png';
import axios from "axios";
import './ind.css';

export default function CreatePost(){
    var uri = "http://localhost:1000/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            bgcolor: data.get('bgcolor'),
            bgimg: data.get('bimg'),
            color: data.get('color'),
            des: data.get('des'),
            poet: data.get('poetname'),
            fontf: data.get('fontf'),
        }
        console.log(obj);
        axios.post(uri+'AddPost', obj).then((succ) => {
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






    const [name,setname] = useState('');
    const [img,setimg] = useState('');
    const [color,setcolor] = useState('');
    const [poem,text] = useState('');
    const [poetn,aut] = useState('');
    const [fam,fontfam] = useState('');

    return(
        <>
<div className="navbar ">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <Link to={'/Home'}><img src={logo} /></Link>
                </div>
            </div>
            <ul className="nav navbar-right">
                    <li className="reg"><Link to="/CreatePost">Create Post</Link></li>
                    <li className="bell"><Link to="/CreatePost" ><img src={bell} /></Link></li>
            </ul>
        </div>
            <div className="create container-fluid">
                <div className="left ">
                <div className="form ">
                <h1>Create Post</h1>
                <form className="form" onSubmit={handleform}>
                <div className="form-group">
                    <input
                        type={'color'}
                        name="bgcolor"
                        placeholder="Choose Color"
                        className="form-control" 
                        onChange={(e) => setname(e.target.value)}
                    /> or
                    <input
                        type={'file'}
                        name="bimg"
                        placeholder="Choose Color"
                        className="form-control" 
                        onChange={(e) => setimg(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type={'color'}
                        name="color"
                        placeholder="Choose Color"
                        className="form-control" 
                        onChange={(e) => setcolor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type={'text'}
                        name="des"
                        placeholder="Enter Youer Poetry"
                        className="form-control"
                        onChange={(e) => text(e.target.value)}
                         />
                </div>
                <div className="form-group">
                    <input
                        type={'text'}
                        name="fontf"
                        placeholder="Enter Family Name"
                        className="form-control"
                        onChange={(e) => fontfam(e.target.value)}
                         />
                </div>
                <div className="form-group">
                    <input
                        type={'text'}
                        name="poetname"
                        placeholder="Enter Poet Name"
                        className="form-control"
                        onChange={(e) => aut(e.target.value)}
                         />
                </div>
             
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
                <div className="right ">
                    <div className="container-fluid post" style={{backgroundImage:"url(" + { img } + ")",backgroundColor:name, color:color,fontFamily:fam}}>
                    <h4>{poem}</h4>
                    <h5>~{poetn}</h5>
                   </div>
                </div>
            </div>
        </>
    );
}