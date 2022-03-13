import React, { Component } from "react";
import PropTypes from "prop-types";
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    doneCount: PropTypes.number.isRequired,
    allCount: PropTypes.number.isRequired,
    checkAll: PropTypes.func.isRequired,
    removeDone: PropTypes.func.isRequired,
  }
  render() {
    const { doneCount, allCount, checkAll, removeDone } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
            checked={doneCount === allCount}
            onChange={e => {
              console.log(e.target.checked)
              checkAll(e.target.checked)
            }} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger"
        onClick={()=>{removeDone()}}>清除已完成任务</button>
      </div>
    );
  }
}

<template></template>;
