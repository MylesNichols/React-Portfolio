import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar.js";
import Footer from './components/footer.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Projects from './pages/projects';
import Resume from './pages/resume.js';
import React from 'react';

// Uses Routes from react to set components to be viewed at all times and pages apart 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/React-Portfolio-MylesNichols' element={<About />} />
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
