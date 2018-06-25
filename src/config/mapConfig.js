import { mapStyle } from './mapStyle'

export const mapConfig = (() => ({
	center: new window.google.maps.LatLng(51.508742,-0.120850),
	zoom: 2,
    minZoom: 2,
	styles: mapStyle,
    gestureHandling: 'none',
    zoomControl: false
}))()
