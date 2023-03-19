import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Works from './Components/Works';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {themeContext} from './Context';
import {useContext} from "react";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color : darkMode? 'white' : ''
    }}
    >
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
