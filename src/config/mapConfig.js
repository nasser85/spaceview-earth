import { mapStyle } from './mapStyle'

export const mapConfig = (() => ({
	center: new window.google.maps.LatLng(-33.8599358,151.2090295),
	zoom: 10,
	styles: mapStyle
}))()