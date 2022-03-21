import PropTypes from "prop-types";
import React, { Component } from "react";

export default class List extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }
  render() {
    const { userList, status } = this.props;
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
    console.log(getEmptyMsg())
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
