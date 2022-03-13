import React, { Component } from "react";
import Item from "../Item";
import PropTypes from 'prop-types'
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    changeTodoList: PropTypes.func.isRequired
  }
  render() {
    const { todoList, changeTodoList, delTodo } = this.props;
    return (
      <div>
        {todoList.map((todo) => {
          return (
            <Item key={todo.id} {...todo} changeTodoList={changeTodoList} delTodo={delTodo}/>
          );
        })}
      </div>
    );
  }
}
