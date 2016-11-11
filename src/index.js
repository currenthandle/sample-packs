import React from 'react';
import { render } from 'react-dom';
import { Router, Route, /*Link,*/ IndexRoute, hashHistory } from 'react-router'

import App from './App';
//import Home from './Home';
import Packs from './Packs';
import About from './About';
import './index.css';

render((
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <Route path='packs' component={Packs} />
            <Route path='about' component={About} />
        </Route>
    </Router>
), document.getElementById('root'));
