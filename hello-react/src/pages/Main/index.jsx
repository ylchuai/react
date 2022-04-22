import React, { Component } from "react";
import { Route } from 'react-router-dom'

import PageHeader from '../../components/Pageheader';

import Home from '../Home';
import About from '../About';
import MyLink from "../../components/MyLink";
import { Switch } from "react-router-dom";
import tpage from "../TPage";

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
              <MyLink to="/about">About</MyLink>
              <MyLink to="/home">Home</MyLink>
              <MyLink to="/home/test">Tpage</MyLink>
            </div>
          </div>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route path="/home/test" component={tpage} />
          </Switch>
        </div>
      </div>
    )
  }
}
