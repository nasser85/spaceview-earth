import React, { Component } from 'react'
import DragButton from 'react-icons/lib/md/more-vert'

import SidebarItem from './SidebarItem'

import '../styles/Sidebar.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            pins: []
        }
        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.renderLocation = this.renderLocation.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if (!this.state.hidden && nextProps.newPins.length == this.props.newPins.length) {
            this.toggleSidebar();
        }
        
    }
    toggleSidebar() {
        let status = this.state.hidden;
        this.setState({hidden: !status})
    }
    removeItem(markerObj) {
        this.props.logPinRemoval(markerObj)
    }
    renderLocation(markerObj, index) {
        return (
            <SidebarItem key={index}
                         markerObj={markerObj}
                         registerRemoval={this.removeItem}></SidebarItem>
        )
    }
    render() {
        return (
            <div className={this.state.hidden ? "places-sidebar hidden" : "places-sidebar"}>
                <ul className="places-item-container">
                    { this.props.newPins.map(this.renderLocation) }
                </ul>
                <DragButton onClick={this.toggleSidebar}
                            className="drag-button"></DragButton>
            </div>
        )
    }
}
