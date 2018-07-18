import React, { Component } from 'react';

import GoogleMap from './components/GoogleMap'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    let noFlex = window.navigator.userAgent.indexOf('Windows') !== -1 ? true : false
    this.state = {
      query: null,
      number: 0,
      newPins: [],
      acceptFromMaps: true,
      pinToRemove: '',
      map: null,
      connectPins: false,
      noFlex
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.registerZoomOut = this.registerZoomOut.bind(this)
    this.passNewPin = this.passNewPin.bind(this)
    this.removePin = this.removePin.bind(this)
  }
  componentDidUpdate() {
    if (this.state.pinToRemove != '') {
      this.setState({pinToRemove:''})
    }
  }
  updateQuery(query) {
    let number = this.state.number + 1;
    this.setState({ query, number, acceptFromMaps:true })
  }
  registerZoomOut() {
    this.updateQuery('Z28gaG9tZQ==')
  }
  passNewPin(pins, map) {
    if (pins.length != this.state.newPins.length) {
        this.setState({
          newPins: pins,
          acceptFromMaps: true,
          map
        })
      
    }
  }
  removePin(pinToRemove) {
    let pins = this.state.newPins.filter(el=>el.name != pinToRemove.name)
    this.setState({
      newPins: pins,
      acceptFromMaps: false,
      pinToRemove: pinToRemove.name
    })
  }
  render() {
    return (
      <div className={ this.state.noFlex ? "App ie-app" : "App" }>
        <Header triggerZoomOut={this.registerZoomOut} 
                transmitQuery={this.updateQuery}></Header>
        <GoogleMap pinToRemove={this.state.pinToRemove} 
                   query={this.state.query}
                   numberOfQueries={this.state.number}
                   logNewPins={this.passNewPin}
                   shouldTransmit={this.state.acceptFromMaps}
                   shouldConnectPins={this.state.connectPins}></GoogleMap>
        <Sidebar logPinRemoval={this.removePin}
                 newPins={this.state.newPins}
                 map={this.state.map}></Sidebar>
      </div>
    );
  }
}

