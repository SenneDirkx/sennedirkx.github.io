import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <Link to="/">Home</Link>
        <p>This web application is still in development. Please check back later.</p>
      </div>
    )
  }
}

export default Portfolio
