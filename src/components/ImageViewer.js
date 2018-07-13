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
		this.logError = this.logError.bind(this)
	}
	closeViewer() {
		this.props.close()
	}
	logError() {
		this.props.onBroken(this.props.images[this.state.index][1], this.props.images[this.state.index][2])
	}
	render() {
		console.log(this.props.images)
		let leftClass = this.state.index > 0 ? "image-left-arrow color-white"
											 : "image-left-arrow color-white hidden"
		let rightClass = this.state.index < this.props.images.length-1 ? "image-right-arrow color-white"
		                                                               : "image-right-arrow color-white hidden"
		return (
			<div className="image-viewer">
				<Close onClick={this.closeViewer} className="close-button color-white" />
				<div className="main-image-container">
					<img id="place-image" alt={this.props.images[this.state.index][1]} className="main-image" src={this.props.images[this.state.index][0]} onError={this.logError}/>
					<div className="main-image-caption">
						<Left className={leftClass} /><p className="main-image-text color-white">{this.props.images[this.state.index][1]}</p><Right className={rightClass} />
					</div>
				</div>
			</div>
		)
	}
}