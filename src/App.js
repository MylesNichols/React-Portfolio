import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from './components/Footer.js';
import About from './pages/About';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import React from 'react';

// Uses Routes from react to set components to be viewed at all times and pages apart 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
