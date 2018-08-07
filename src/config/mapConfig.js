import { mapStyle } from './mapStyle'

export const mapConfig = (() => ({
	center: new window.google.maps.LatLng(51.508742,-0.120850),
	zoom: 3,
    minZoom: 3,
	styles: mapStyle,
    streetViewControl: false
}))()

export const mapBounds = (() =>([
		null,
		null,
		null,
		50,
		75,
		81,
		83,
		84,
		84,
		84.5,
		84.5
	]))()