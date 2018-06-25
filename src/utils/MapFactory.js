import { localKeys } from '../config/local.keys.js'

export default class MapFactory {
    static findLocation(query) {
        return fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + query.replace(/ /g, '+') + "&key=" + localKeys.GOOGLE_API_KEY)
                .then(res=> {
                    console.log('what')
                    return res.json();
                })
    }
}
