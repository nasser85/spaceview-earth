import React, { Component } from 'react'

import MapFactory from '../utils/MapFactory'
import SearchIcon from 'react-icons/lib/md/search'

import '../styles/Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.enterQuery = this.enterQuery.bind(this)
        this.triggerEmptyQueryAlert = this.triggerEmptyQueryAlert.bind(this)
    }
    enterQuery() {
        let query = this.refs.searchQuery.value
        query.length ? this.props.registerQuery(query) : this.triggerEmptyQueryAlert()
    }
    triggerEmptyQueryAlert() {
        alert('Please enter a query value, like New York or Pyramids of Giza.')
    }
    componentDidMount() {
        document.getElementById('search-input').focus();
    }
    render() {
        return (
            <div className="search-wrapper">
                <div className="input-wrapper">
                    <input ref="searchQuery" id="search-input"></input>
                    <div className="search-btn" onClick={this.enterQuery}><p className="search-btn-label">Find Location <SearchIcon /></p></div>
                </div>
            </div>
        )
    }
}
