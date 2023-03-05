import React, { useState, useEffect } from "react";
import Pre from './components/Pre'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from './components/ScrollToTop'
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'

function App() {
    const [load, updateLoad] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false)
        }, 1200);

        return () => clearTimeout(timer)
    }, [])

    return (
        <Router>
            <Pre load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
                <footer />
            </div>
        </Router>
    );
}


export default App;