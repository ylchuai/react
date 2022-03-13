import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css"; 

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    changeTodoList: PropTypes.func.isRequired
  }
  state = {
    display: false,
  }
  mouseHandel = (isEnter) => () => {
    this.setState({
      display: isEnter,
    })
  }
  checkHandel = (id) => () => {
    this.props.changeTodoList(id);
  }

  delHandel = (id) => {
    window.confirm('Sure to delet?') && this.props.delTodo(id);
  }
  render() {
    // const {content, done} = this.props.todo;
    const { id, content, done } = this.props;
    const { display } = this.state;
    return (
      <div>
        <li onMouseEnter={this.mouseHandel(true)} onMouseLeave={this.mouseHandel(false)}>
          <label>
            {/* defaultChecked 用于默认第一次操作数据
            若之后也需要数据是响应式的，需要改为checked */}
            <input type="checkbox" checked={done} onChange={ this.checkHandel(id)}/>
            <span>{content}</span>
          </label>
          <button className="btn btn-danger" style={{display: display ? "block": "none"}} onClick={() => {this.delHandel(id)}}>
            删除
          </button>
        </li>
      </div>
    );
  }
}
