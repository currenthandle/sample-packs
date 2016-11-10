import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import SamplePack from './SamplePack';
import './index.css';
import packs from '../data/packs';

ReactDOM.render(
    <div>
        <Header />
        { packs.map((samplePack, i) => <SamplePack 
            key={i}
            imgSrc={samplePack.imgSrc} 
            descriptions = {samplePack.description} /> 
        )}
    
    </div>,
    document.getElementById('root')
);
