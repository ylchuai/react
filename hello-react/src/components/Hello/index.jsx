import css from './index.module.css';
import React, { Component } from 'react';

export default class Hello extends Component {
    state = {
        name: 'React'
    }
    render() {
        return (
        <div className={css.title}>Hello, {this.state.name}</div>
        )
    };
}