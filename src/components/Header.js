import React, { Component } from 'react'

import SearchIcon from 'react-icons/lib/md/search'
import Timeline from 'react-icons/lib/md/timeline'
import Globe from 'react-icons/lib/md/language'
import AllPins from 'react-icons/lib/md/map'
import Search from './Search'

import '../styles/Header.css'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
            searchVisible: false,
            connected: false
		}
        this.toggleSearch = this.toggleSearch.bind(this)
        this.toggleConnected = this.toggleConnected.bind(this)
        this.renderSearch = this.renderSearch.bind(this)
        this.captureQuery = this.captureQuery.bind(this)
        this.triggerZoomOut = this.triggerZoomOut.bind(this)
	}
    toggleConnected() {
        let status = this.state.connected
        this.setState({connected: !status})
    }
    toggleSearch() {
        let status = this.state.searchVisible
        this.setState({searchVisible: !status})
    }
    captureQuery(query) {
        this.toggleSearch();
        this.props.transmitQuery(query);
    }
    renderSearch() {
        return (
            <Search registerQuery={this.captureQuery}></Search>
        )
    }
    triggerZoomOut() {
        this.props.triggerZoomOut();
    }
	render() {
		return (
            <div>
    			<div className="nav-wrapper">
                    <ul className="nav-items">
                        <li className='nav-item' ><AllPins /></li>
                        <li className='nav-item' onClick={this.triggerZoomOut}><Globe /></li>
                        <li className={ this.state.connected ? 'nav-item clicked' : 'nav-item'} onClick={this.toggleConnected}><Timeline /></li>
                        <li className={ this.state.searchVisible ? 'nav-item clicked' : 'nav-item'} onClick={this.toggleSearch}><SearchIcon /></li>
                    </ul>
    			</div>
                { this.state.searchVisible ? this.renderSearch() : false }
            </div>
		)
	}
}
