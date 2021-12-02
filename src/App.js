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
          <Router>
            <Routes>
              <Route exact path="/" element={<News pageSize={3} country={'us'} category={'general'}/>}/>
              <Route exact path="/business" element={<News pageSize={3} country={'us'} category={'business'}/>}/>
              <Route exact path="/entertainment" element={<News pageSize={3} country={'us'} category={'entertainment'}/>}/>
              <Route exact path="/general" element={<News pageSize={3} country={'us'} category={'general'}/>}/>
              <Route exact path="/health" element={<News pageSize={3} country={'us'} category={'health'}/>}/>
              <Route exact path="/science" element={<News pageSize={3} country={'us'} category={'science'}/>}/>
              <Route exact path="/sports" element={<News pageSize={3} country={'us'} category={'sports'}/>}/>
              <Route exact path="/technology" element={<News pageSize={3} country={'us'} category={'technology'}/>}/>
          </Routes>
        </Router>        
      </div>
    )
  }
}