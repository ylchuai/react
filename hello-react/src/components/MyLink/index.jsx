import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

export default class MyLink extends Component {
  render() {
    // const { to, children } = this.props;
    return (
      // <NavLink activeClassName="myactive" className="list-group-item" to={to} >{children}</NavLink>
      <NavLink activeClassName="myactive" className="list-group-item" {...this.props} />
    )
  }
}
