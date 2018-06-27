import React, { Component } from 'react'
import DragButton from 'react-icons/lib/md/more-vert'
import Place from 'react-icons/lib/md/place'
import RemovePlace from 'react-icons/lib/md/clear'
import '../styles/Sidebar.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.renderLocation = this.renderLocation.bind(this)
        this.findPlace = this.findPlace.bind(this)
        this.removePlace = this.removePlace.bind(this)
    }
    toggleSidebar() {
        let status = this.state.hidden;
        this.setState({hidden: !status})
    }
    findPlace() {
        console.log(this.props.key)
    }
    removePlace() {

    }
    renderLocation(markerObj, index) {
        return (
            <li key={index}>
                <div className="places-item">
                    <div className="item-name"><p>{markerObj.name}</p></div>
                    <div className="item-find"><p><Place onClick={this.findPlace}></Place></p></div>
                    <div className="item-remove"><p><RemovePlace onClick={this.removePlace}></RemovePlace></p></div>
                </div>
            </li>
        )
    }
    render() {
        return (
            <div className={this.state.hidden ? "places-sidebar hidden" : "places-sidebar"}>
                <ul className="places-item-container">
                    { this.props.newPins.map(this.renderLocation) }
                </ul>
                <DragButton onClick={this.toggleSidebar} className="drag-button"></DragButton>
            </div>
        )
    }
}
