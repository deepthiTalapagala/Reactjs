import About from './css/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Exp from './components/Exp';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skill from './components/Skill';
import './style.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  let sty = {color: 'red', background: 'yellow', padding: '30px', textAlign: 'center'}
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Exp />
      <Contact />
      {/* <Routes>
        <Route path='' element={<Navbar />} />
        <Route path='about' element={<About />} />
        <Route path='edu' element={<Education />} />
        <Route path='skill' element={<Skill />} />
        <Route path='exp' element={<Exp />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
