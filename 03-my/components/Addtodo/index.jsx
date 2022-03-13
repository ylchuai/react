import React, { Component } from "react";

export default class Addtodo extends Component {
  render() {
    return (<input type="text" onKeyDown={this.add} />);
  }
  add = (event) => {
    if (event.keyCode === 13) {
      this.props.addTodo(event.target.value);
      event.target.value = "";
    }
  };
}
