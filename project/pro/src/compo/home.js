import { useState } from 'react';
import logo from '../1596377906547.jpg';
import '../App.css';
import AboutUS from './About US.js';

function Home() {
    var f = 'Hi, My Name is Harjobandeep Singh.';
    var AboutUS = './About US.js';
    const [name,setname] = useState(''); ///function
  
    return (
      <div className="App">
        <header className="App-header">
          <nav><a >HS</a> 
            <a href={AboutUS} className='jh'>About US</a>
           </nav>
          {/* function call */}
          <button onClick={setname}>Click Me</button> 
          <button onClick={() => setname('Hello')}>Click Me</button> 
          <input onKeyUp={(e) => setname(e.target.value) } />
          <div className='cent'>
            <h3>{f}{name}</h3>
            <img src={logo} alt="nothing" />
          </div>
        </header>
      </div>
    );
  }
export default Home;