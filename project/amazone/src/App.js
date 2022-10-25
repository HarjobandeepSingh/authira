import './App.css';
import Home from './compo/home.js';
import About from './compo/about';
import { BrowserRouter, Router,Route,Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
          <Home/>
          <About/>
          <BrowserRouter>
            <Routes>
              <Route path='About' element={<App/>}/>
            </Routes>
          </BrowserRouter>
          
    </div>
  );
}

export default App;
