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
                <ul>
                    { this.props.newPins.map(this.renderLocation) }
                </ul>
                <DragButton onClick={this.toggleSidebar} className="drag-button" style={{"position" : "absolute", "top" : "50%", "left" : "100%", 'zIndex' : '100', "color": "white", "fontSize":"3rem", "marginLeft":"-12px","marginTop":"-13px"}}></DragButton>
            </div>
        )
    }
}
