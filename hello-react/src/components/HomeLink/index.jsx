import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

export default class HomeLink extends Component {
  render() {
    return (
        <li>
            <NavLink activeClassName="myactive" className="list-group-item" {...this.props} />
        </li>
    )
  }
}
