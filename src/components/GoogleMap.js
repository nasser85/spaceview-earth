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
        this.zoomOut = this.zoomOut.bind(this)
        this.addInfoWindowClickEvents = this.addInfoWindowClickEvents.bind(this)
        this.checkForUpdates = this.checkForUpdates.bind(this)
        this.removePin = this.removePin.bind(this)
	}
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', this.createGenericMap);
	}
    componentDidUpdate() {
        if (this.props.shouldTransmit) {
            console.log('here', this.props)
            this.props.logNewPins(this.state.mapPins)
        } 
    }
    zoomOut() {
        this.state.map.setCenter(mapConfig.center)
        this.state.map.setZoom(3);
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
                this.placeMarker(location, locationName, bounds)
            }
        }, 200)
    }
    placeMarker(location, name, bounds) {
        let markerExists = this.state.mapPins.filter(el => el.name == name).length
        if (markerExists) {
            return
        }
        const position = new window.google.maps.LatLng(location.lat, location.lng);
        let pin = new MapPin(new window.google.maps.Marker({ position }), name, position, bounds)
        pin.marker.setMap(this.state.map)
        let infoWindowEventArgs = MapFactory.constructInfoWindow(pin, this.state.map)
        this.addInfoWindowClickEvents(...infoWindowEventArgs)
        MapFactory.addClickEvent(pin, this.state.map)
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
    removePin(markerObj) {
        markerObj.marker.setMap(null)
        let updatedPins = this.state.mapPins.filter(el => el.name != markerObj.name)
        this.setState({mapPins : updatedPins})
    }
    addInfoWindowClickEvents(viewImagesBtn, removePinBtn, markerObj) {
        window.google.maps.event.addListener(markerObj.infoWindow, 'domready', () => {
            document.getElementById(viewImagesBtn).addEventListener('click', () => {
                console.log(markerObj.name)
            })
            document.getElementById(removePinBtn).addEventListener('click', () => { this.removePin(markerObj) })
        })
    }
    checkForUpdates() {
        console.log(this.state)
        let remove = this.state.mapPins.filter(el=>el.name==this.props.pinToRemove);
        if (this.props.numberOfQueries != this.state.numberOfQueries) {
             this.props.query == 'Z28gaG9tZQ==' ? this.zoomOut() : MapFactory.findLocation(this.props.query)
                        .then(this.logData)
        }
        if (remove.length) {
            this.removePin(remove[0])
        }
    }
	render() {
        this.checkForUpdates()  
		return (
			<div id="nasa-app-map-background"></div>
		)
	}
}
