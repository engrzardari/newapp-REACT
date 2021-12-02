import './App.css';

import React, { Component } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';
import Spinner from './components/Spinner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>          
          <NabBar/>
          <Router>
            <Routes>
              <Route exact path="/" element={<News pageSize={this.pageSize} country={'us'} category={'general'}/>}/>
              <Route exact path="/business" element={<News pageSize={this.pageSize} country={'us'} category={'business'}/>}/>
              <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country={'us'} category={'entertainment'}/>}/>
              <Route exact path="/general" element={<News pageSize={this.pageSize} country={'us'} category={'general'}/>}/>
              <Route exact path="/health" element={<News pageSize={this.pageSize} country={'us'} category={'health'}/>}/>
              <Route exact path="/science" element={<News pageSize={this.pageSize} country={'us'} category={'science'}/>}/>
              <Route exact path="/sports" element={<News pageSize={this.pageSize} country={'us'} category={'sports'}/>}/>
              <Route exact path="/technology" element={<News pageSize={this.pageSize} country={'us'} category={'technology'}/>}/>
          </Routes>
        </Router>  
        <Footer/>
      </div>
    )
  }
}