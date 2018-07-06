import React, { Component } from 'react'
import Place from 'react-icons/lib/md/place'
import RemovePlace from 'react-icons/lib/md/clear'

import MapFactory from '../utils/MapFactory.js'

export default class SidebarItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.findPlace = this.findPlace.bind(this)
        this.removePlace = this.removePlace.bind(this)
    }
    findPlace() {
        MapFactory.journeyToDestination(this.props.markerObj, this.props.map)
    }
    removePlace() {
        this.props.registerRemoval(this.props.markerObj)
    }
    render() {
        return (
            <li>
                <div className="places-item bg-white">
                    <div className="item-name color-black"><p>{this.props.markerObj.name}</p></div>
                    <div className="item-find color-red"><p><Place className="item-object" onClick={this.findPlace}></Place></p></div>
                    <div className="item-remove color-blue"><p><RemovePlace className="item-object" onClick={this.removePlace}></RemovePlace></p></div>
                </div>
            </li>
        )
    }
}
