import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/Portfolio.css';

import Header from '../components/Header'
import Wip from '../components/WIP'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header title="Check It Out" />
        <Wip />
      </div>
    )
  }
}

export default Portfolio
