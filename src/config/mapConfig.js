import { mapStyle } from './mapStyle'

export const mapConfig = (() => ({
	center: new window.google.maps.LatLng(51.508742,-0.120850),
	zoom: 3,
    minZoom: 3,
	styles: mapStyle,
    gestureHandling: 'none',
    zoomControl: false
}))()
