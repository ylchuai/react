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
  /* Promise形式使用fetch */
  // searchHandle = () => {
  //   PubSub.publish('getUserList', {
  //     userlist: [],
  //     status: 'loading'
  //   })
  //   const {keywordElement: {value}} = this;
    
  //   fetch('https://api.github.com/search1/users?q=' + value)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(value => {
  //       const userlist = value.items.map((item) => {
  //         return {
  //           id: item.id,
  //           img: item.avatar_url,
  //           userName: item.login,
  //           homePage: item.html_url,
  //         };
  //       });
  //       if (userlist.length) {
  //         return {
  //           status: '',
  //           userlist: userlist,
  //         }
  //       } else {
  //         return {
  //           userlist: [],
  //           status: 'empty'
  //         }
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return {
  //         userlist: [],
  //         status: 'error'
  //       }
  //     })
  //     .finally(res => {
  //       PubSub.publish('getUserList', res);
  //     });
  // };

  /* async await 的方式使用fetch */
  searchHandle = async () => {
    PubSub.publish('getUserList', {
      userlist: [],
      status: 'loading'
    })
    const {keywordElement: {value}} = this;
    
    let sendMsg = {};
    try {
      const res = await fetch('https://api.github.com/search/users?q=' + value);
      const data = await res.json();
      console.log(data)
      const userlist = data.items.map((item) => {
        return {
          id: item.id,
          img: item.avatar_url,
          userName: item.login,
          homePage: item.html_url,
        };
      });
      if (userlist.length) {
        sendMsg = {
          status: '',
          userlist: userlist,
        }
      } else {
        sendMsg = {
          status: 'empty',
          userlist: [],
        }
      }
    } catch (e) {
      console.error(e)
      sendMsg = {
        userlist: [],
        status: 'error'
      }
    } finally {
      PubSub.publish('getUserList', sendMsg);
    }
  };
}
