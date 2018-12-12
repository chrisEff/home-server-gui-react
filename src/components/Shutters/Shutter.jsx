'use strict'

import homeServerApi from '../../homeServerApi'

import React from 'react'
import PropTypes from 'prop-types'

class Shutter extends React.Component {

	static propTypes = {
		shutter: PropTypes.object.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {shutter: props.shutter}
	}


	render () {
		return (
			<div className='shutter'>
				<h4>{this.state.shutter.name}</h4>
				<br/>
				<span className='button' onClick={this.handleUpClick}>⬆️</span><br/>
				<span className='button' onClick={this.handleDownClick}>⬇️</span>
			</div>
		)
	}

	handleUpClick = async () => {
		await homeServerApi.put(`/shutters/shutter/${this.props.shutter.id}/up`)
	}

	handleDownClick = async () => {
		await homeServerApi.put(`/shutters/shutter/${this.props.shutter.id}/down`)
	}
}

export default Shutter
