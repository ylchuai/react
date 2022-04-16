import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'

import PageHeader from '../Pageheader';

import Home from '../../pages/Home';
import About from '../../pages/About';

export default class Rpage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              <Link to="/about" className="list-group-item">About</Link>
              <Link to="/home" className="list-group-item">Home</Link>
            </div>
          </div>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
        </div>
      </div>
    )
  }
}
