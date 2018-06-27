import React, { Component } from 'react'
import DragButton from 'react-icons/lib/md/more-vert'
import '../styles/Sidebar.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.renderLocation = this.renderLocation.bind(this)
    }
    toggleSidebar() {
        let status = this.state.hidden;
        this.setState({hidden: !status})
    }
    renderLocation(markerObj) {
        return (
            <li><p>{markerObj.name} <span>X</span></p></li>
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
