import './App.css';

import React, { Component } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
          <NabBar/>
          <News/>
      </div>
    )
  }
}

