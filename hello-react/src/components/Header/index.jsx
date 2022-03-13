import React, { Component } from "react";
import PropTypes from "prop-types";
import './index.css'

export default class Header extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.add}/>
      </div>
    );
  }
  add = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      if (e.target.value.trim() === '') return;
      this.props.add(e.target.value);
      e.target.value = '';
    }
  }
}
