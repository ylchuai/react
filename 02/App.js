import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  };
}
