import { localKeys } from '../config/local.keys.js'
import $ from 'jquery'

export default class MapFactory {
    static findLocation(query) {
        return $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + query.replace(/ /g, '+') + "&key=" + localKeys.GOOGLE_API_KEY)
    }
    static addClickEvent(markerObj, map) {
    	window.google.maps.event.addListener(markerObj.marker, 'click', () => {
            this.journeyToDestination(markerObj, map);
    	})
    }
    static journeyToDestination(markerObj, map) {
        map.setCenter(markerObj.marker.location)
        map.fitBounds(new window.google.maps.LatLngBounds(markerObj.bounds.southwest, markerObj.bounds.northeast))
        this.openInfoWindow(markerObj, map)
    }
    static constructInfoWindow(markerObj, map) {
    	let baseIdName = markerObj.name.replace(/\W/g, '-')
    	let removeId = baseIdName + '_remove'
    	let imagesId = baseIdName + '_images'
    	let infoWindow = new window.google.maps.InfoWindow({
    		content: `<p><strong>${markerObj.name.toUpperCase()}</strong></p>
    					<p><span id=${imagesId} class="info-link">View NASA images for this region</span></p>
    					<p><span id=${removeId} class="info-link">Remove Pin</span></p>`
    	})
    	markerObj.infoWindow = infoWindow
    	this.openInfoWindow(markerObj, map)
    	return [imagesId, removeId, markerObj]
    }
    static openInfoWindow(markerObj, map) {
    	markerObj.infoWindow.open(map, markerObj.marker)
    }
    static getPinPath(pins, map) {
        let locations = pins.map(el => el.location)
        let pinPath = new window.google.maps.Polyline({
            path: locations,
            strokeColor: '#FBFBFF',
            strokeWeight: 2
        })
        return pinPath
    }
}
