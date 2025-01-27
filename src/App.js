// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from './components/ContactPage';
import Courses from './components/Courses';
 import KnowledgeNetworkPage from './components/KnowledgeNetworkPage';
 import Mentors from './components/Mentors';


export default class App extends Component {
  render() {
    return (
      <>
      
        <BrowserRouter> 
        <Navbar/>
        
       <Routes>
       <Route exact path="/contact" element={<ContactPage/>}>
        </Route> 
      <Route exact path="/" element={<HomePage/>}>
      </Route>
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/Course" element={<Courses/>}>
      </Route>
      <Route exact path="/Knowledge" element={<KnowledgeNetworkPage/>}>
      </Route>
      <Route exact path="/Mentors" element={<Mentors/>}>
      </Route>
      </Routes>
    </BrowserRouter> 
  
   
   
    
    
    
        
        
       
    </>
    )
  }
}

