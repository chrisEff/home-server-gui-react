'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Shutter from './Shutter'

import {loadShutters} from '../../actions/shutters'

class Shutters extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		shutters: PropTypes.arrayOf(
			PropTypes.object
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.shutters ? <div/> : (
			<div id='shutters'>
				<h2>{this.props.title}</h2>
				{this.props.shutters.map(shutter =>
					<Shutter key={shutter.name} id={shutter.id}/>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	shutters: state.shutters,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadShutters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shutters)
