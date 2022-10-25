import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comp/home';
import About from './comp/about';
import Login from './comp/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (

    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/about' element={<About />} />
          
        </Routes>
      </Router>


    </div>

  );
}

export default App;
