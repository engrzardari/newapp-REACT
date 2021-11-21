import './App.css';

import React, { Component } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';
import Spinner from './components/Spinner';


export default class App extends Component {

  render() {
    return (
      <div>
      
          <NabBar/>
          <News pageSize={3} country={'us'} category={'general'}/>
      </div>
    )
  }
}

