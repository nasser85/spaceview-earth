import React, { Component } from 'react';

import GoogleMap from './components/GoogleMap'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: null,
      number: 0,
      newPins: [],
      acceptFromMaps: true,
      pinToRemove: ''
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.registerZoomOut = this.registerZoomOut.bind(this)
    this.passNewPin = this.passNewPin.bind(this)
    this.removePin = this.removePin.bind(this)
  }
  componentDidUpdate() {
    console.log("The app's state has changed")
  }
  updateQuery(query) {
    let number = this.state.number + 1;
    this.setState({ query, number, acceptFromMaps:true })
    console.log(window.google)
  }
  registerZoomOut() {
    this.updateQuery('Z28gaG9tZQ==')
  }
  passNewPin(pins) {
    if (pins.length != this.state.newPins.length) {
      console.log(pins)
        this.setState({newPins: pins, acceptFromMaps: true}, this.setState({ state: this.state }))
      
    }
  }
  removePin(pinToRemove) {
    console.log("pin to remove => ", pinToRemove)
    console.log(this.state.newPins)
    let pins = this.state.newPins.filter(el=>el.name != pinToRemove.name)
    this.setState({
      newPins: pins,
      acceptFromMaps: false,
      pinToRemove: pinToRemove.name
    })
  }
  render() {
    console.log("new pins => ", this.state.newPins)
    return (
      <div className="App">
        <Header triggerZoomOut={this.registerZoomOut} transmitQuery={this.updateQuery}></Header>
        <GoogleMap pinToRemove={this.state.pinToRemove} query={this.state.query} numberOfQueries={this.state.number} logNewPins={this.passNewPin} shouldTransmit={this.state.acceptFromMaps}></GoogleMap>
        <Sidebar logPinRemoval={this.removePin} newPins={this.state.newPins}></Sidebar>
      </div>
    );
  }
}

