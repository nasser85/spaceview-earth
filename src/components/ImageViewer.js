import React, { Component } from 'react'

import '../styles/ImageViewer.css'

export default class ImageViewer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0
		}
		this.closeViewer = this.closeViewer.bind(this)
	}
	closeViewer() {
		this.props.close()
	}
	render() {
		console.log(this.props.images)
		return (
			<div className="image-viewer">
			<p onClick={this.closeViewer} className="color-white">CLICK ME</p>
				<img className="main-image" src={this.props.images[this.state.index]} />
			</div>
		)
	}
}