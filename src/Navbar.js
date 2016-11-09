import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import './SamplePack.css';
//import Navbar from './Navbar';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div><a href='/'>
            <img src='vengeance_logo.png' />
        </a></div>
        <div><a href='/packs'>Sample Packs</a></div>
        <div><a href='/support'>Support</a></div>
        <div><a href='/testimonials'>Testimonials</a></div>
        
      </nav>
    );
  }
}

export default Navbar;
