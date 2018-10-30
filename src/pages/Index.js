import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../static/Index.css';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="titles">
          <h1 className="title">Hi, my name is <span className="name">Dirkx Senne</span>.</h1>
          <h1 className="title">I&#39;m a Computer Science student.</h1>
          <br />
          <div className="links">
            <Link to="/about" className="link">About</Link>
            <Link to="/portfolio" className="link">Portfolio</Link>
            <Link to="/services" className="link">Services</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
