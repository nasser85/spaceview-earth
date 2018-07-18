import React, { Component } from 'react'
import Close from 'react-icons/lib/md/clear'
import Right from 'react-icons/lib/md/keyboard-arrow-right'
import Left from 'react-icons/lib/md/keyboard-arrow-left'
import Loader from '../assets/loader.gif'

import '../styles/ImageViewer.css'

export default class ImageViewer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0
		}
		this.closeViewer = this.closeViewer.bind(this)
		this.logError = this.logError.bind(this)
		this.onImageLoad = this.onImageLoad.bind(this)
		this.renderMainImage = this.renderMainImage.bind(this)
		this.renderCaption = this.renderCaption.bind(this)
		this.maybeClose = this.maybeClose.bind(this)
	}
	componentDidMount() {
		document.addEventListener('keydown', this.maybeClose)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.maybeClose)
	}
	closeViewer() {
		this.props.close()
	}
	maybeClose(e) {
		if (e.which === 27 || e.keyCode === 27) {
			this.props.close()
		}
	}
	logError() {
		this.props.onBroken(this.props.images[this.state.index][1], this.props.images[this.state.index][2])
	}
	onImageLoad() {
		document.getElementById('place-image').classList.remove('hidden')
		document.getElementById('loader').classList.add('hidden')
	}
	renderCaption() {
		let leftClass = this.state.index > 0 ? "image-left-arrow color-white"
											 : "image-left-arrow color-white hidden"
		let rightClass = this.state.index < this.props.images.length-1 ? "image-right-arrow color-white"
		                                                               : "image-right-arrow color-white hidden"
		return (
			<div className="main-image-caption">
				<Left className={leftClass} /><p className="main-image-text color-white">{this.props.images.length ? this.props.images[this.state.index][1] : ' '}</p><Right className={rightClass} />
			</div>
		)
	}
	renderMainImage() {
		return (
			<img id="place-image"
			     alt={this.props.images[this.state.index][1]}
			     className="main-image hidden"
			     src={this.props.images[this.state.index][0]}
			     onError={this.logError}
			     onLoad={this.onImageLoad}></img>
		)
	}
	render() {
		return (
			<div className="image-viewer">
				<Close onClick={this.closeViewer} className="close-button color-white" />
				<div className="main-image-container">
					{ this.props.images.length ? this.renderMainImage() : false }
					<img id="loader" className="main-image" src={Loader} />
					{ this.renderCaption() }
				</div>
			</div>
		)
	}
}