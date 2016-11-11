import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import './SamplePack.css';
//import Navbar from './Navbar';
import './css/Navbar.css';
import { Link, IndexLink } from 'react-router'; 

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div><IndexLink to='/'>
            <img src='vengeance_logo.png' />
        </IndexLink></div>
        <div><Link to='packs'>Sample Packs</Link></div>
        <div><Link to='support'>Support</Link></div>
        <div><Link to='testimonials'>Testimonials</Link></div>
        
      </nav>
    );
  }
}

export default Navbar;
