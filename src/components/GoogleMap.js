import React, { Component } from 'react'

import { mapConfig } from '../config/mapConfig'
import MapFactory from '../utils/MapFactory'
import MapPin from '../config/MapPin'

import '../styles/GoogleMap.css'

export default class GoogleMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			center: null,
			zoom: null,
			styles: null,
			map: null,
            query: null,
            numberOfQueries: 0,
            mapPins: []
		}
		this.createGenericMap = this.createGenericMap.bind(this)
        this.goToPlace = this.goToPlace.bind(this)
        this.logData = this.logData.bind(this)
        this.travelToDestination = this.travelToDestination.bind(this)
        this.placeMarker = this.placeMarker.bind(this)
	}
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', this.createGenericMap);
	}
    goToPlace() {
        this.setState({query: this.props.query})
    }
    logData(data) {
        console.log(data)
        if (!data.results.length) {
            return
        }
        let info = data.results[0]
        let location = info.geometry.location
        let locationName = info.formatted_address
        let bounds = info.geometry.viewport
        this.state.map.setCenter(location)
        this.state.map.setZoom(3);
        this.travelToDestination(bounds, location, locationName);
    }
    travelToDestination(bounds, location, locationName) {
        let zoom = 3
        let zoomAnimation = window.setInterval(()=>{
            if (zoom < 10) {
                zoom++;
                this.state.map.setZoom(zoom)
            } else {
                window.clearInterval(zoomAnimation)
                this.state.map.fitBounds(new window.google.maps.LatLngBounds(bounds.southwest, bounds.northeast))
                this.placeMarker(location, locationName)
            }
        }, 200)
    }
    placeMarker(location, name) {
        const position = new window.google.maps.LatLng(location.lat, location.lng);
        let pin = new MapPin(new window.google.maps.Marker({ position }), name, position)
        pin.marker.setMap(this.state.map)
        let updatedPins = this.state.mapPins
        updatedPins.push(pin)
        this.setState({
            mapPins : updatedPins,
            numberOfQueries : this.props.numberOfQueries
        })
    }
	createGenericMap() {
		let map, service;
		if (!this.state.map) {
			map = new window.google.maps.Map(document.getElementById('nasa-app-map-background'), mapConfig)
            this.setState({ map })
		}
	}
	render() {
        if (this.props.numberOfQueries != this.state.numberOfQueries) {
             console.log('query value: ', this.props.query, this.props.numberOfQueries)
             MapFactory.findLocation(this.props.query)
                        .then(this.logData)
        }
		return (
			<div id="nasa-app-map-background"></div>
		)
	}
}
