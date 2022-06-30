import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
    document.getElementById('darkMenuLabel').innerHTML = "Disable Dark Menu";
    } else {
      setMode('light');
      document.getElementById('darkMenuLabel').innerHTML = "Enable Dark Menu";
    }
  }
  return (
    <>
      <Router>
        {/* here title is prop/properties of navbar component and I can use this prop in navbar component as function parameter named props*/}
        <Navbar className="my-2" title="Navbar Demo" about="About This Project" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<Textform heading="Enter your text here to Analyze"/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
