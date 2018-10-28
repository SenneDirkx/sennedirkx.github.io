import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/App.css';

import Index from './pages/Index'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="fill">
          <Route exact path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
