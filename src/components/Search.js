import React, { Component } from 'react'

import MapFactory from '../utils/MapFactory'
import SearchIcon from 'react-icons/lib/md/place'

import '../styles/Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.enterQuery = this.enterQuery.bind(this)
        this.triggerEmptyQueryAlert = this.triggerEmptyQueryAlert.bind(this)
        this.checkKey = this.checkKey.bind(this)
    }
    enterQuery() {
        let query = this.refs.searchQuery.value
        query.length ? this.props.registerQuery(query) : this.triggerEmptyQueryAlert()
    }
    checkKey(e) {
        if (e.which === 13 || e.keyCode === 13) {
            this.enterQuery()
        }
    }
    triggerEmptyQueryAlert() {
        alert('Please enter a query value, like New York or Pyramids of Giza.')
    }
    componentDidMount() {
        document.getElementById('search-input').focus();
    }
    render() {
        return (
            <div onKeyPress={this.checkKey} className="search-wrapper">
                <div className="input-wrapper">
                    <input ref="searchQuery" placeHolder="city, address, landmark" id="search-input"></input>
                    <div className="search-btn" onClick={this.enterQuery}><p className="search-btn-label">Capture Location <SearchIcon /></p></div>
                </div>
            </div>
        )
    }
}
