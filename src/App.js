import React, { Component } from 'react';

import GoogleMap from './components/GoogleMap'
import Header from './components/Header'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: null,
      number: 0
    }
    this.updateQuery = this.updateQuery.bind(this);
  }
  updateQuery(query) {
    let number = this.state.number + 1;
    this.setState({ query, number })
    console.log(window.google)
  }
  render() {
    return (
      <div className="App">
        <Header transmitQuery={this.updateQuery}></Header>
        <GoogleMap query={this.state.query} numberOfQueries={this.state.number}></GoogleMap>
      </div>
    );
  }
}

