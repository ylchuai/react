import axios from "axios";
import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            // ref={this.keywordElement}
            ref={c => this.keywordElement = c}
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.searchHandle}>Search</button>
        </div>
      </section>
    );
  }
  // keywordElement = React.createRef();
  searchHandle = () => {
    PubSub.publish('getUserList', {
      userlist: [],
      status: 'loading'
    })
    const {keywordElement: {value}} = this;
    axios.get('https://api.github.com/search/users?q=' + value).then(value => {
      const userlist = value.data.items.map((item) => {
        return {
          id: item.id,
          img: item.avatar_url,
          userName: item.login,
          homePage: item.html_url,
        };
      });
      if (userlist.length) {
        PubSub.publish('getUserList', {
          userlist: userlist,
          status: ''
        })
      } else {
        PubSub.publish('getUserList', {
          userlist: [],
          status: 'empty'
        })
      }
    }).catch(err => {
      PubSub.publish('getUserList', {
        userlist: [],
        status: 'error'
      })
      console.log(err);
    });
  };
}
