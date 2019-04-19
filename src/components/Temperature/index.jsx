'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TemperatureSensor from './TemperatureSensor'

import {loadTempSensors} from '@/actions/temperature'

class Temperature extends React.Component {

	static propTypes = {
		title: PropTypes.string,
		tempSensors: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
			})
		),
	}

	async componentDidMount () {
		this.props.onLoad()
	}

	render () {
		return !this.props.tempSensors ? <div/> : (
			<div id='temperature'>
				<h2>{this.props.title}</h2>
				{this.props.tempSensors.map(sensor =>
					<TemperatureSensor key={sensor.id}  id={sensor.id}/>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	tempSensors: state.tempSensors,
})

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(loadTempSensors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)
