import React, { Component } from 'react';

import GoogleMap from './components/GoogleMap'
import Header from './components/Header'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <GoogleMap></GoogleMap>
      </div>
    );
  }
}

