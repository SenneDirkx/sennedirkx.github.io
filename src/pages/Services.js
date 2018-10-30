import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/Services.css';

import Header from '../components/Header'
import Wip from '../components/WIP'

class Services extends Component {
  render() {
    return (
      <div>
        <Header title="What can I do for you?" />
        <Wip />
      </div>
    )
  }
}

export default Services
