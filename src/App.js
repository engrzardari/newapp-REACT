import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Johan';
  render() {
    return (
      <div>
        Hello my first class base Component {this.c}
      </div>
    )
  }
}

