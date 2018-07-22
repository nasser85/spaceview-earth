import React, { Component } from 'react'

import SearchIcon from 'react-icons/lib/md/place'
import Timeline from 'react-icons/lib/md/timeline'
import Globe from 'react-icons/lib/md/language'
import AllPins from 'react-icons/lib/md/map'
import Close from 'react-icons/lib/md/clear'
import Search from './Search'

import '../styles/Header.css'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
            searchVisible: true,
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
        if (!status) {
            this.props.transmitConnectPins()
        } else {
            this.props.transmitDisconnectPins()
        }
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
            <Search registerQuery={this.captureQuery}
                    onExit={this.toggleSearch}></Search>
        )
    }
    triggerZoomOut() {
        this.props.triggerZoomOut();
    }
	render() {
		return (
            <div>
    			<div className="nav-wrapper bg-white">
                    <span className="header-title">SpaceView Earth</span>
                    <ul className="nav-items">
                        <li className='nav-item' onClick={this.triggerZoomOut}><Globe className="color-blue" /></li>
                        <li className={ this.state.connected ? 'nav-item clicked' : 'nav-item'} onClick={this.toggleConnected}><Timeline className="color-red"/></li>
                        <li className={ this.state.searchVisible ? 'nav-item clicked' : 'nav-item'} onClick={this.toggleSearch}><SearchIcon className="color-black"/></li>
                        <li className={ this.state.searchVisible ? 'nav-item exit-btn clicked' : 'nav-item exit-btn'} onClick={this.toggleSearch}><Close className="color-white" /></li>
                    </ul>
                    
    			</div>
                { this.state.searchVisible ? this.renderSearch() : false }
            </div>
		)
	}
}
