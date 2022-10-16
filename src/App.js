import React from 'react'
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
