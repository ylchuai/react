import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomeLink from '../../components/HomeLink'
import Message from './Message'
import News from './News'

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <ul className="nav nav-tabs">
                <HomeLink to="/home/news">News</HomeLink>
                <HomeLink to="/home/message">Message</HomeLink>
              </ul>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
