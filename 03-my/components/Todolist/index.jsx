import React, { Component } from "react";
import Addtodo from "../Addtodo";
import Checklist from "../Checklist";

export default class Todolist extends Component {
  state = {
    todos: [
      { id: 1, value: "A", isCheck: false },
      { id: 2, value: "B", isCheck: false },
      { id: 3, value: "C", isCheck: false },
    ],
    allCheck: false,
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Addtodo addTodo={this.addTodo} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCheck}
                onChange={this.change(todo)}
              />
              {todo.value}
            </li>
          ))}
        </ul>
        <Checklist
          doneCount={this.state.todos.filter((todo) => todo.isCheck).length}
          allCount={ this.state.todos.length }
          changeAll={this.changeAll}
          allCheck={this.state.allCheck}
        />
      </div>
    );
  }
  addTodo = (value) => {
    this.setState({
      todos: [
        { id: this.state.todos.length + 1, value, isCheck: false },
        ...this.state.todos,
      ],
      allCheck: false,
    });
  };
  change = (todo) => {
    return () => {
      todo.isCheck = !todo.isCheck;
      this.setState({
        todos: this.state.todos,
        allCheck: this.state.todos.every((todo) => todo.isCheck)
      });
    };
  };
  changeAll = (allCheck) => {
    const { todos } = this.state;
    todos.forEach((todo) => { 
      todo.isCheck = allCheck;
    });
    this.setState({
      todos,
      allCheck
    });
  };
}
