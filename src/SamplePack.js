import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './SamplePack.css';

class SamplePack extends Component {
  render() {
    return (
      <div className="sample-pack">
        <img 
            className = 'sample-pack-img'
            src='sample-pack-img.jpg' />
        <div 
            className='text'>
            <p>As Deep House, Tropical House, and Future House flood major clubs and radio charts worldwide, this sample pack comes just in time to help you catch the wave.</p>
            <p>With a fresh supply of more than 2,400 pristine audio samples, Vengeance Essential Deep House Vol. 2 delivers the very best in drum, bassline, and percussion samples, as well as Vengeance-quality effects and live-played saxophone and guitar recordings.</p>
            <p>All drum loops are available in three different BPMs (120, 122 and 124), and all tonal sounds, including kicks, are labeled by key.</p>

            <audio controls preload='auto'>
                <source src="afterhours.mp3" />
            </audio>
            <button>Buy Now<br/>$9.99</button>
            <button>Subscribe<br/>$3.99 / month</button>
        </div>
      </div>
    );
  }
}

export default SamplePack;
