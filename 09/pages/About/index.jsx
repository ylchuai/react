import React, { Component } from 'react'

export default class about extends Component {
  render() {
    console.log('about', this.props)
    return (
      <div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <h2>我是About的内容</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
