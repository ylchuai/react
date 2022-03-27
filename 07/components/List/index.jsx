import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class List extends Component {
  state = {
    userList: [],
    status: 'first'
  }
  // 挂载时注册一个订阅
  componentDidMount() {
    PubSub.subscribe('getUserList', (msg, data) => {
      this.setState({
        userList: data.userlist,
        status: data.status
      })
    });
  }

  // 卸载前取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe('getUserList');
  }
  render() {
    const { userList, status } = this.state;
    const getEmptyMsg = () => {
      switch (status) {
        case 'first':
          return 'Welcome to use this app';
        case 'loading':
          return 'Loading...';
        case 'empty':
          return 'No results found';
        case 'error':
          return 'Error';
        default:
          break;
      }
    }
    return (
      <div className="row">
        {
          userList.length?userList.map(user => (
            <div className="card" key={user.id}>
              <a href={user.homePage}>
                <img
                  src={user.img}
                  alt={user.userName}
                  style={{'width': '100px'}}
                />
              </a>
              <p className="card-text">{user.userName}</p>
            </div>
          )): getEmptyMsg()
        }
      </div>
    );
  }
}
