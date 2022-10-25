import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
///boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import Home from './comp/home';
import Register from './comp/register.js';
import Dashbaord1 from './comp/Dashboard1';
import Login from './comp/login';
import Index from './comp/index';
import CreatePost from './comp/CreatePost'
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Dashboard' element={<Dashbaord1 />} />
              <Route path='/Register' element={< Register />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/index' element={<Index />} />
              <Route path='/CreatePost' element={<CreatePost/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
