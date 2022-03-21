import React, { Component } from 'react'
import List from '../List'
import Search from '../Search'

export default class Content extends Component {
  state = {
    userList: [],
    status: 'first'
  }
  getUserList = (userList, status) => {
    console.log(status)
    this.setState({
      userList,
      status
    })
  }
  render() {
    const { userList, status } = this.state;
    console.log(status)
    return (
      <div className="container">
        <Search getUserList={this.getUserList}/>
        <List userList={userList} status={status}/>
      </div>
    )
  }
  
}
