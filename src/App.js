import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Projects from './components/Projects.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import SocialLinks from './components/SocialLinks.js';
import Footer from './components/Footer.js';
import Resume from './components/Resume.js';
import Home from './components/Home.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
