import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../static/Header.css'

import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar />
        <header>
          <h1>{this.props.title}</h1>
        </header>
      </div>
    )
  }
}

export default Header;
