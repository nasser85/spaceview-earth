import React, { Component } from 'react'

import { mapConfig } from '../config/mapConfig'

import '../styles/GoogleMap.css'

export default class GoogleMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			center: null,
			zoom: null,
			styles: null,
			map: null
		}
		this.createGenericMap = this.createGenericMap.bind(this)
	}
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', this.createGenericMap);
	}
	createGenericMap() {
		let map;
		if (!this.state.map) {
			map = new window.google.maps.Map(document.getElementById('nasa-app-map-background'), mapConfig)
			this.setState({ map })
		}
	}
	render() {
		return (
			<div id="nasa-app-map-background"></div>
		)
	}
}