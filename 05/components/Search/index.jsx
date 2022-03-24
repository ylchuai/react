import PropTypes from "prop-types";
import axios from "axios";
import React, { Component } from "react";

export default class Search extends Component {
  static propTypes = {
    getUserList: PropTypes.func.isRequired
  };

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
    this.props.getUserList([], "loading");
    // const { value } = this.keywordElement.current;
    const {keywordElement: {value}} = this;
    axios.get('https://api.1github.com/search/users?q=' + value).then(value => {
      const userlist = value.data.items.map((item) => {
        return {
          id: item.id,
          img: item.avatar_url,
          userName: item.login,
          homePage: item.html_url,
        };
      });
      if (userlist.length) {
        this.props.getUserList(userlist);
      } else {
        this.props.getUserList([], "empty");
      }
    }).catch(err => {
      this.props.getUserList([], 'error');
      console.log(err);
    });
  };
}
