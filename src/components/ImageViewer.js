import React, { Component } from 'react'
import Close from 'react-icons/lib/md/clear'
import Right from 'react-icons/lib/md/keyboard-arrow-right'
import Left from 'react-icons/lib/md/keyboard-arrow-left'

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
				<Close onClick={this.closeViewer} className="close-button color-white" />
				<div className="main-image-container">
					<img className="main-image" src={this.props.images[this.state.index]} />
					<div className="main-image-caption">
						<Left className="image-left-arrow color-white" /><p className="main-image-text color-white"> PLACE NAME THAT IS REALLY REALLLLLLLLLLLLY LONG</p><Right className="image-right-arrow color-white" />
					</div>
				</div>
			</div>
		)
	}
}