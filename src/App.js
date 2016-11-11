import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import SamplePack from './SamplePack';
import packs from '../data/packs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { packs.map((samplePack, i) => <SamplePack 
            key={i}
            imgSrc={samplePack.imgSrc} 
            descriptions = {samplePack.description} /> 
        )}
      </div>
    );
  }
}

export default App;
