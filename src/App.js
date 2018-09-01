import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-text">
            <h1 className="App-title">Hi, my name is <span className="name">Dirkx Senne</span>.</h1>
            <h1 className="App-title">I&#39;m a Fullstack Web Developer.</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
