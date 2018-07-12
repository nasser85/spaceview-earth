import { localKeys } from '../config/local.keys.js'
const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery?'

export default class EarthFactory {
	static fetchImage(lat, lng) {
		return fetch(baseUrl + `lon=${lng}&lat=${lat}&api_key=${localKeys.NASA_API_KEY}`)
				.then(res=>res.json())
	}
}
