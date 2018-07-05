import React, { Component } from 'react'
import Place from 'react-icons/lib/md/place'
import RemovePlace from 'react-icons/lib/md/clear'

export default class SidebarItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.findPlace = this.findPlace.bind(this)
        this.removePlace = this.removePlace.bind(this)
    }
    findPlace() {
        console.log(this.props.markerObj)
    }
    removePlace() {
        this.props.registerRemoval(this.props.markerObj)
    }
    render() {
        return (
            <li>
                <div className="places-item">
                    <div className="item-name"><p>{this.props.markerObj.name}</p></div>
                    <div className="item-find"><p><Place onClick={this.findPlace}></Place></p></div>
                    <div className="item-remove"><p><RemovePlace onClick={this.removePlace}></RemovePlace></p></div>
                </div>
            </li>
        )
    }
}
