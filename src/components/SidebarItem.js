import React, { Component } from 'react'

export default class SidebarItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.findPlace = this.findPlace.bind(this)
        this.removePlace = this.removePlace.bind(this)
    }
    findPlace() {

    }
    removePlace() {

    }
    render() {
        return (
            <li key={index}>
                <div className="places-item">
                    <div className="item-name"><p>{this.propsmarkerObj.name}</p></div>
                    <div className="item-find"><p><Place onClick={this.findPlace}></Place></p></div>
                    <div className="item-remove"><p><RemovePlace onClick={this.removePlace}></RemovePlace></p></div>
                </div>
            </li>
        )
    }
}
