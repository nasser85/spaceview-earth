export default class MapPin {
    constructor(marker, name, location, bounds) {
        this.marker = marker
        this.name = name
        this.location = location
        this.bounds = bounds
        this.infoWindow = null
    }
}
