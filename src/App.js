import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Header from './Header';
import SamplePack from './SamplePack';
import packs from '../data/packs';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
