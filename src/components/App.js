
import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
;
import './../styles/App.css';
import { Home } from "./Home";
import { About } from "./About";


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
