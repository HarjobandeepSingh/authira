import React from "react"; 
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import himg from '../undraw_studying_re_deca(4) - Copy.svg';
import gif from '../icons8-bird-unscreen.gif';

export default function Home(){
    return(
        <>

            {/* <div className="navbar">
                <div className="navbar-header">
                    <a className="navbar-brand"><img src={logo} /></a>  
                </div>
                <ul className="nav navbar-right">
                    <li className="active"><Link to="/Login">Log in</Link></li>
                    <li className="reg"><Link to="/Register">Create Account</Link></li>
                </ul>
            </div>
            <div className="hero">
                <div className="txt">
                <p className="po">“Poetry comes from the highest happiness or the deepest sorrow.”</p>
                <p className="n">—A.P.J. Abdul Kalam</p>
                </div>
                <img src={himg} className="h-img" />

            </div> */}
        <div className="navbar ">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <Link to={'/Home'}><img src={logo} /></Link>
                </div>
            </div>
            <ul className="nav navbar-right">
                    <li className="active"><Link to="/Login">Log in</Link></li>
                    <li className="reg"><Link to="/Register">Create Account</Link></li>
            </ul>
        </div>
        <div className="hero">
            <p>
                <h1>WORDS</h1>
                are not for keeping to yourself, share it with the world
            </p>
            <img src={gif} className='gif'/>
            <img src={himg} />
        </div>
        
        </>
    );
}