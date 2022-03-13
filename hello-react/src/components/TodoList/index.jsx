import React, { Component } from "react";
import List from "../List";
import Header from "../Header";
import Footer from "../Footer";

import {nanoid} from "nanoid"
import "./index.css";
/**
 * 步骤：
 * 1. 拆分组件
 * 2. 初始化状态
 * 3. 添加方法
 * 注意：
 * 1. 父子通信 => props传递数据
 *    子父通信 => props传递方法
 * 2. defaultChecked => 初始化状态
 *    checked => 需要配合onChange使用
 * 3. 状态的操作方法与状态放在同一个组件中
 *    props是只读的
 * 4. 状态位置：
 *    组件自身以及子组件使用：放在本组件中
 *    多个兄弟组件共用：放在父组件中
 */
export default class TodoList extends Component {
  state = {
    todoList: [
      { id: '1', content: "吃饭", done: true },
      { id: '2', content: "睡觉", done: true },
      { id: '3', content: "打豆豆", done: false },
    ],
  };
  add = (todo) => this.setState({
    todoList: [...this.state.todoList, {
      id: nanoid(),
      content: todo,
      done: false,
    }]
  });
  changeTodoList = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
    })
  }
  delTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    })
  }
  checkAll = (checked) => {
    const { todoList } = this.state;
    todoList.forEach(todo => todo.done = !!checked);
    this.setState({
      todoList
    })
  }
  removeDone = () => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => !todo.done)
    })
  }
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add={this.add} />
          {
            todoList.length ?
              <List todoList={todoList} changeTodoList={this.changeTodoList} delTodo={this.delTodo} /> :
              ''
          }
          {
            todoList.length ?
              <Footer
                doneCount={todoList.filter(todo => todo.done).length}
                allCount={todoList.length}
                checkAll={this.checkAll}
                removeDone={this.removeDone}
              /> :
              ''
          }
        </div>
      </div>
    );
  }
}
