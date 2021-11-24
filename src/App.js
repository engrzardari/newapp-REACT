import './App.css';

import React, { Component } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';
import Spinner from './components/Spinner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <div>
          
          <NabBar/>
          <Routes>
            <Route path="/"><News pageSize={3} country={'us'} category={'general'}/></Route>
            <Route path="/business"><News pageSize={3} country={'us'} category={'business'}/></Route>
            <Route path="/entertainment"><News pageSize={3} country={'us'} category={'entertainment'}/></Route>
            <Route path="/general"><News pageSize={3} country={'us'} category={'general'}/></Route>
            <Route path="/health"><News pageSize={3} country={'us'} category={'health'}/></Route>
            <Route path="/science"><News pageSize={3} country={'us'} category={'science'}/></Route>
            <Route path="/sports"><News pageSize={3} country={'us'} category={'sports'}/></Route>
            <Route path="/technology"><News pageSize={3} country={'us'} category={'technology'}/></Route>
        </Routes>
          
      </div>

    )
  }
}