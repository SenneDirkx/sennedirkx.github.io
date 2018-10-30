import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/About.css';

import Header from '../components/Header'
import Wip from '../components/WIP'

class About extends Component {
  render() {
    return (
      <div>
        <Header title="My Point of View" />
        <Wip />
      </div>
    )
  }
}

export default About
