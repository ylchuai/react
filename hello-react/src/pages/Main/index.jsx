import React, { Component } from "react";
import { Route } from 'react-router-dom'

import PageHeader from '../../components/Pageheader';

import Home from '../Home';
import About from '../About';
import MyLink from "../../components/MyLink";
import { Switch } from "react-router-dom";

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
              {/* <NavLink activeStyle={{"background": "lightblue"}} to="/about" className="list-group-item">About</NavLink>
              <NavLink activeClassName="active" to="/home" className="list-group-item">Home</NavLink> */}
              <MyLink to="/a/about">About</MyLink>
              <MyLink to="/a/home">Home</MyLink>
            </div>
          </div>
          <Switch>
            <Route path="/a/about" component={About} />
            <Route path="/a/home" component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}
