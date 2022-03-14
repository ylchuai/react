
import './APP.css'
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}> Student Click </button>
        <button onClick={this.getStudentInfo}> Cars Click </button>
      </div>
    )
  }
  getStudentInfo = () => {
    axios.get('http://localhost:3000/runner/students').then(res => {
      console.log('success', res)
    }, err => {
      console.log('error', err)
    })
  }
  getCarInfo = () => {
    axios.get('http://localhost:3000/api/cars').then(res => {
      console.log('success', res)
    }, err => {
      console.log('error', err)
    })
  }
}
